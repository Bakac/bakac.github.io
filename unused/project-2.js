export default {
	props: {
		labname: String
	},
	data() {
		return {
			
		}
	},
	methods: {
		toggleTable(event) {
			if (event.target.nextElementSibling.style.maxHeight == '') {
				event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + 'px';
			} else { 
				event.target.nextElementSibling.style.maxHeight = '';
			}
			event.target.nextElementSibling.classList.toggle("opened");
			event.target.querySelector('i').classList.toggle("opened");
		}
	},
	template: `
			<main>
				<section class="body-container flex-stack">
					<section id="project" class="dark">
						<div class="card">
							<div class="wrapper-horizontal flex-box">
								<div class="flex-40">
									<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=ideas')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
								</div>
							</div>

							<div class="wrapper-horizontal flex-box margin-top-32">
								<div class="flex-60">
									<h2>Distorted Self-Referential Memory in Trauma-Related Disorders</h2>
									<p>Recognizing how different experiences and knowledge relate to the self is essential for many psychological functions. For example, we need to distinguish between what is proposed by the self and what is said by others in a conversation. Using a self-referential memory paradigm, we showed that trauma-related disorders, such as psychosis and dissociation, present with difficulty differentiating between self-generated and externally derived representations. This distortion of self-referential memory may be linked to an altered sense of self resulting from early relational trauma.</p>
								</div>

								<div class="flex-40">
									<img class="img-center max-height-300" src="./img/project-2.webp" width="1920">
								</div>
							</div>

							<div class="wrapper-horizontal flex-box margin-top-64">
								<div class="flex-40">
									<h3>Related Articles</h3>
									<p>
										Chiu, C.-D., Tollenaar, M. S., Yang, C.-T., Elzinga, B. M., &amp; Zhang, T.-Y., &amp; Ho, H. L. (2019). The loss of the self in memory: Self-referential memory, childhood relational trauma, and dissociation. <em>Clinical Psychological Science, 7</em>, 265&ndash;282. 
										<span class="inlineBtn highlight" @click="toggleTable($event)">Abstract<i class="fa fa-chevron-right toggle-icon toggle-icon-right"></i></span>
										<div class="toggle-box toggle-section">
											<div class="left-border">
												<p>The segregated representations pertinent to childhood relational trauma have long been posited as a key pathogenic mechanism for dissociation. Yet, the weak to moderate correlation of child maltreatment with dissociation proneness leads to the question about which factors may moderate the impact of adverse childhood interpersonal experiences and work synergistically in the genesis of dissociation. We hypothesized that self-referential memory may play a role and that low accessibility to self-referenced representations may obstruct the ongoing synthesis of self representations, leaving these unassimilated early experiences disintegrated and inimical to mental function in response to a stressful situation. This hypothesis was examined by two experiments in college students. The first experiment showed the association between dissociation proneness and low accessibility to self-referenced representations. The second demonstrated that low accessibility to self-referenced representations moderated the link between childhood relational trauma and dissociation proneness. Weakened self-referential memory matters in the link between trauma and dissociation.</p>
												<p><b>Keywords:</b> child abuse, diathesis-stress model, dissociation, self-reference, trauma</p>
											</div>
										</div>
									</p>

									<p>
										Chiu, C.-D., Ho, H. L., Tollenaar, M. S., Elzinga, B. M., &amp; Zhang, T.-Y. (2019). Early relational trauma and self representations: Misattributing externally derived representations as internally generated. <em>Psychological Trauma: Theory, Research, Practice, and Policy, 11</em>,&nbsp;64&ndash;72. 
										<span class="inlineBtn highlight" @click="toggleTable($event)">Abstract<i class="fa fa-chevron-right toggle-icon toggle-icon-right"></i></span>
										<div class="toggle-box toggle-section">
											<div class="left-border">
												<p><b>Objective:</b> Early relational trauma has been posited to be responsible for dysfunctional self schema as negative feedback derived from abusive close others may influence the development of self-evaluation. However, the association between early relational trauma and negative self-evaluation has proven inconsistent. In addition to the evaluative aspect, early relational trauma may impact on the procedural aspect of self schema, with a difficulty in differentiating mental representations derived from others from those generated internally by the self. <b>Method:</b> To test this hypothesis, the authors adopted a source attribution paradigm tapping on the distinction between mental representations generated by the self or derived from another person in a nonclinical sample, together with scales measuring self-evaluation and early relational experiences. <b>Results:</b> The results showed that individuals with early relational trauma tended to attribute the representations externally derived as internally generated, although there were no associations between early relational trauma and self-evaluation. Importantly, early relational trauma had unique contribution to source misattribution independent from common covariates including early nonrelational trauma, parental dysfunction, general memory function, and negative affect states. <b>Conclusions:</b> Erroneously identifying information derived from other people as self-generated may be a specific sociocognitive propensity linked to early relational trauma and may impact upon the development of self schema.</p>
												<p><b>Keywords:</b> child abuse, self-esteem, shame, source monitoring, trauma</p>
											</div>
										</div>
									</p>


									<p>
										Chiu, C.-D., Tseng, M.-C., Chien, Y.-L., Liao, S.-C., Liu, C.-M., Yeh, Y.-Y., & Hwu, H.-G. (2016). Misattributing the source of self-generated representations related to dissociative and psychotic symptoms. <em>Frontier in Psychology</em>, 7, Article 541. 
										<span class="inlineBtn highlight" @click="toggleTable($event)">Abstract<i class="fa fa-chevron-right toggle-icon toggle-icon-right"></i></span>
										<div class="toggle-box toggle-section">
											<div class="left-border">
												<p><b>Objective:</b> An intertwined relationship has been found between dissociative and psychotic symptoms, as the two symptom clusters frequently co-occur, suggesting some shared risk factors. Using a source monitoring paradigm, previous studies have shown that patients with schizophrenia made more errors in source monitoring, suggesting that a weakened sense of individuality may be associated with psychotic symptoms. However, no studies have verified a relationship between sense of individuality and dissociation, and it is unclear whether an altered sense of individuality is a shared sociocognitive deficit underlying both dissociation and psychosis. <b>Method:</b> Data from 80 acute psychiatric patients with unspecified mental disorders were analyzed to test the hypothesis that an altered sense of individuality underlies dissociation and psychosis. Behavioral tasks, including tests of intelligence and source monitoring, as well as interview schedules and self-report measures of dissociative and psychotic symptoms, general psychopathology, and trauma history, were administered. <b>Results:</b> Significant correlations of medium effect sizes indicated an association between errors attributing the source of self-generated items and positive psychotic symptoms and the absorption and amnesia measures of dissociation. The associations with dissociative measures remained significant after the effects of intelligence, general psychopathology, and trauma history were excluded. Moreover, the relationships between source misattribution and dissociative measures remained marginally significant and significant after controlling for positive and negative psychotic symptoms, respectively. <b>Limitations:</b> Self-reported measures were collected from a small sample, and most of the participants were receiving medications when tested, which may have influenced their cognitive performance. <b>Conclusions:</b> A tendency to misidentify the source of self-generated items characterized both dissociation and psychosis. An altered sense of individuality embedded in self-referential representations appears to be a common sociocognitive deficit of dissociation and psychosis.</p>
												<p><b>Keywords:</b> dissociation, generation effect, psychosis, self, source monitoring, trauma</p>
											</div>
										</div>
									</p>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>`
}