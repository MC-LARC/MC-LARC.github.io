# Data Description

We provide the MC-LARC dataset, which is available in ['dataset'](dataset).

MC-LARC has three versions:
- ['dataset/MC-LARC_original_ver](**Original**): without constraints and methods.
- **Constraints**: with constraints.
- **Self-feedback**: with constraints and the self-feedback method.

If you have any questions about our dataset, please contact us at shindong97411@gmail.com.



<br/> 

---
### 1. MC-LARC_Input_description_and_Output_description.csv
This file contains **input description** and **output description** for the ARC 400 training dataset. </br>
This dataset was created based on LARC [1]. </br>
However, it was not directly used LARC dataset; Through the refinement process, the quality was improved. </br>
</br>
The column structure is as follows:
| task_id | task_name | description_input | description_output |
|---------|-----------|-------------------|--------------------|

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
| task_id | task_name  | shuffled_description1 | shuffled_description2 | shuffled_description3 | shuffled_description4 | shuffled_description5 | answer |
|---------|------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|--------|

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
