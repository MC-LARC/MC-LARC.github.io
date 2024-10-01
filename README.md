# MC-LARC.github.io


[<a href="https://openreview.net/forum?id=8ed7ZGhBGJ#discussion" style="background-color: #4CAF50; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">
  PAPER
</a>]

[<a href="https://mc-larc.github.io/" style="background-color: #008CBA; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">
  PROJECT PAGE
</a>]

[<a href="https://github.com/GIST-DSLab/MC-LARC" style="background-color: #008CBA; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">
  CODE
</a>]



## Dataset

In this folder, there are two files.

---
### 1. MC-LARC_Input_description_and_Output_description.csv
This file contains **input description** and **output description** for the ARC 400 training dataset. </br>
This dataset was created based on LARC [1]. </br>
However, it was not directly used LARC dataset; Through the refinement process, the quality was improved. </br>
</br>
The column structure is as follows:
- task_id
- task_name
- description_input
- description_output

---
### 2. shuffled_MC-LARC_description.csv
This file includes five choices for each **description_output** from the first file, serving as the correct answer. </br>
The choices are randomly shuffled, and by checking the last column, you can finde which one is the correct answer. </br>
Similar to the first file, the first two columns represent task_id and task_name. </br>
</br>
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
