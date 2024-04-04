# MC-LARC.github.io

web page link: https://mc-larc.github.io/
</br>

## Dataset

In this folder, there are two files.

---
### 1. MC-LARC_Input_description_and_Output_description.csv
This file contains 'input description' and 'output description' for the ARC 400 training dataset.
This dataset was created based on LARC [1].
However, it was not directly used LARC dataset; Through the refinement process, the quality was improved.

The column structure is as follows:
- task_id
- task_name
- description_input
- description_output

---
### 2. shuffled_MC-LARC_description.csv
This file includes five choices for each 'description_output' from the first file, serving as the correct answer.

The choices are randomly shuffled, and by checking the last column, you can determine which choice is the correct answer.

Similar to the first file,
the first two columns represent task_id and task_name.

The column structure is as follows:
- task_id
- task_name
- shuffled_description1
- shuffled_description2
- shuffled_description3
- shuffled_description4
- shuffled_description5
- answer

---
### Reference
[1] Acquaviva, Sam, et al. "Communicating natural programs to humans and machines." Advances in Neural Information Processing Systems 35 (2022): 3731-3743.
