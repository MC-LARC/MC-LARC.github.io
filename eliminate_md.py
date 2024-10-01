import os

# Define the folder where the .md files are located
folder = 'md_files'

# Loop through all files in the folder
for filename in os.listdir(folder):
    if filename.endswith('.md'):
        # Define file path
        filepath = os.path.join(folder, filename)
        
        # Remove the file
        os.remove(filepath)
        print(f'Removed {filename}')

print('All .md files have been removed.')
