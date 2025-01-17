<script>
	import { ChevronLeft, Icon } from 'svelte-hero-icons';
</script>

<title>MC-LARC Dataset Download</title>
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.7.0/github-markdown-dark.css"
/>

<section>
	<div class="container w-full">
		<a href="/" class="lexend mb-10 flex items-center gap-2 text-white">
			<Icon src={ChevronLeft} class="h-5 w-5" />
			<div>Back to Home</div>
		</a>

		<h1 class="mb-1 text-2xl font-semibold text-white">MC-LARC Dataset Download</h1>
		<p class="mb-2 text-white">Click the buttons below to download the MC-LARC datasets:</p>
		<a href="/assets/choices/refined_larc.csv" download class="download-btn"
			>Download refined LARC</a
		>
		<a href="/assets/choices/original_mc_larc.csv" download class="download-btn"
			>Download Original MC-LARC</a
		>
		<a href="/assets/choices/constraints_mc_larc.csv" download class="download-btn"
			>Download Constraints MC-LARC</a
		>
		<a href="/assets/choices/self-feedback_mc_larc.csv" download class="download-btn"
			>Download Self-feedback MC-LARC</a
		>
	</div>

	<div class="markdown-body">
		<h1>Data Description</h1>
		<p>
			We provide the MC-LARC dataset and refined <a href="dataset/refined_larc.csv">LARC</a
			> [3] dataset.
		</p>
		<p>MC-LARC has three versions:</p>
		<ul>
			<li><a href="dataset/original_mc_larc.csv">Original</a> [2]: without constraints and methods.</li>
			<li><a href="dataset/constraints_mc_larc.csv">Constraints</a> [3]: with constraints.</li>
			<li>
				<a href="dataset/self-feedback_mc_larc.csv">Self-feedback</a> [4]: with constraints and the
				self-feedback method.
			</li>
		</ul>
		<p>
			If you have any questions about our dataset, please contact us at <a
				href="mailto:shindong97411@gmail.com">shindong97411@gmail.com</a
			>.
		</p>
		<hr />

		<h2>Metadata</h2>
		<p>The metadata provides basic information about refined LARC and MC-LARC.</p>

		<h3>1. refined_larc.csv</h3>
		<p>
			This file contains <em>"input description"</em> and <em>"output description"</em> for the ARC 400
			training dataset.
		</p>

		<table>
			<thead>
				<tr>
					<th>Field</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>task_id</td>
					<td>Unique ID number of MC-LARC</td>
				</tr>
				<tr>
					<td>task_name</td>
					<td>Unique ID of ARC task</td>
				</tr>
				<tr>
					<td>description_input</td>
					<td>Description of the input for an ARC task</td>
				</tr>
				<tr>
					<td>description_output</td>
					<td>Description of the rule for an ARC task</td>
				</tr>
			</tbody>
		</table>

		<p>This dataset was created based on LARC [1].</p>
		<p>
			However, the LARC dataset was not directly used; Through the refinement process, the quality
			was improved.
		</p>

		<hr />

		<h3>2. MC-LARC csv files</h3>
		<p>
			This file includes five options for each <em>"description_output"</em> from the
			<a href="dataset/refined_larc.csv">refined_LARC.csv</a> [3] file, serving as the correct answer.
		</p>
		<p>
			The five options are randomly shuffled, and there is only one correct answer. You can find
			what is the correct answer by checking the last <em>answer</em> field.
		</p>

		<table>
			<thead>
				<tr>
					<th>Field</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>task_id</td>
					<td>Unique ID number of MC-LARC</td>
				</tr>
				<tr>
					<td>task_name</td>
					<td>Unique ID of ARC task</td>
				</tr>
				<tr>
					<td>shuffled_description (1 ~ 5)</td>
					<td>Shuffled description of the MC-LARC</td>
				</tr>
				<tr>
					<td>answer</td>
					<td>Description of the rule for an ARC task</td>
				</tr>
			</tbody>
		</table>

		<hr />

		<h3>Reference</h3>
		<p>
			[1] Acquaviva, Sam, et al. "Communicating natural programs to humans and machines." <em
				>Advances in Neural Information Processing Systems 35</em
			> (2022): 3731-3743.
		</p>
		<p>
			[2] Shin, Donghyeon, et al. "MC-LARC Dataset for Evaluating the Reasoning Abilities of Large Language Models."
			<em>Korea Software Congress</em> (2023).
		</p>
		<p>
			[3] Shin, Donghyeon, et al. "Regulation Using Large Language Models to Generate Synthetic Data for Evaluating Analogical Ability."
			<em>IJCAI Workshop on Analogical Abstraction in Cognition, Perception, and Language</em> (2024).
		</p>
		<p>
			[4] Shin and Lee, et al. "From Generation to Selection: Findings of Converting Analogical Problem-Solving into Multiple-Choice Questions."
			<em>EMNLP Findings</em> (2024).
		</p>
	</div>
</section>

<style>
	section {
		font-family: Arial, sans-serif;
		line-height: 1.6;
		color: #333;
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}
	.container {
		background-color: #0d1117;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.download-btn {
		display: inline-block;
		margin: 10px;
		padding: 10px 20px;
		background-color: #3498db;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		font-weight: bold;
		transition: background-color 0.3s;
	}
	.download-btn:hover {
		background-color: #2980b9;
	}
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}
	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
