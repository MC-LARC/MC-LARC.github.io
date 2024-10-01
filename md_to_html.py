import os
import markdown

# Define the folder where the .md files are located
input_folder = 'md_files'

# Loop through all files in the input folder
for filename in os.listdir(input_folder):
    if filename.endswith('.md'):
        # Define file paths
        input_filepath = os.path.join(input_folder, filename)
        output_filename = filename.replace('.md', '.html')
        output_filepath = os.path.join(input_folder, output_filename)

        # Read the content of the markdown file
        with open(input_filepath, 'r', encoding='utf-8') as md_file:
            md_content = md_file.read()

        # Convert markdown content to HTML
        html_content = markdown.markdown(md_content)

        # Save the converted HTML content to a new file
        with open(output_filepath, 'w', encoding='utf-8') as html_file:
            html_file.write(html_content)

        print(f'Converted {filename} to {output_filename}')
