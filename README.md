# MC-LARC.github.io

web page link: https://mc-larc.github.io/
</br>

## Dataset

In this folder, there are two files.

### 1. refined_refined_LARC_Input_description_and_Output_description.csv
This file contains 'input description' and 'output description' for the ARC 400 training dataset.

The column structure is as follows:
- task_id
- task_name
- description_input
- description_output

This dataset was created based on LARC [1].
However, it was not directly used LARC dataset; instead, it underwent a refinement process for enhancing quality, focusing on a subset of LARC.

### 2. shuffled_MC-LARC_description.csv
This file includes five choices for each 'description_output' from the first file, serving as the correct answer.

Similar to the first file,
the first two columns represent task_id and task_name.

The choices are randomly shuffled, and by checking the last column, you can determine which choice is the correct answer.
