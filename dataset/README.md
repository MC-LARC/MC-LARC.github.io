# Data Description

We provide the MC-LARC dataset.

MC-LARC has three versions:
- ['Original'](dataset/original_MC-LARC): without constraints and methods.
- ['Constraints'](dataset/constraints_MC-LARC): with constraints.
- ['Self-feedback'](dataset/self-feedback_MC-LARC): with constraints and the self-feedback method.

If you have any questions about our dataset, please contact us at shindong97411@gmail.com.

<br/> 

---

## Metadata

The metadata provides basic information about refined LARC and MC-LARC.

### 1. refined_LARC.csv
This file contains **input description** and **output description** for the ARC 400 training dataset. </br>

| Field               | Description                                |
|---------------------|--------------------------------------------|
| task_id             | Unique ID number of MC-LARC                |
| task_name           | Unique ID of ARC task                      |
| description_input   | Description of the input for an ARC task   |
| description_output  | Description of the rule for an ARC task    |

This dataset was created based on LARC [1]. </br>
However, it was not directly used LARC dataset; Through the refinement process, the quality was improved. </br>
</br>

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
