import os
import re

# HTML 파일이 저장된 폴더 경로
folder_path = "./html_files"

# 폴더 내의 모든 .html 파일을 읽고 수정하는 함수
def modify_html_files(folder_path):
    # 폴더 내의 모든 파일을 반복
    for filename in os.listdir(folder_path):
        # 확장자가 .html인 파일만 처리
        if filename.endswith(".html"):
            file_path = os.path.join(folder_path, filename)

            # 파일을 읽기 모드로 열기
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()

            # "Task Information"을 "Task Demonstration Example"로 변경
            new_content = content.replace("Task Information", "Task Demonstration Example")

            # <img> 태그에서 style 속성이 없는 경우 추가
            def add_style_to_img_tag(match):
                img_tag = match.group(0)
                # style 속성이 없다면 추가
                if 'style=' not in img_tag:
                    img_tag = img_tag.replace('>', ' style="width: 80%; height: auto;">')
                return img_tag

            # <img> 태그 수정
            new_content = re.sub(r'<img\s+[^>]*src="images/tasks/[^>]*>', add_style_to_img_tag, new_content)

            # 수정된 내용을 다시 파일에 쓰기 모드로 저장
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)

            print(f"Modified: {filename}")

# 함수 실행
modify_html_files(folder_path)
