// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import * as data from '../resource/timeline.json'// assert { type: "json" }

let timeline_content = data.content

for (let i = 0; i < timeline_content.length; i++) {

    timeline_content[i].date = new Date(timeline_content[i].date); 
}

timeline_content.sort((a,b)=> a.date - b.date)

const text_timeline_list = document.getElementById('timeline_list')

let temp_timeline = ''

for (let i=timeline_content.length - 1; i>=0;i--) {

    let lr = 'left'

    if(i % 2 == 0) {
        lr = 'right'
    }

    temp_timeline = temp_timeline + `						<li class="timeline-item ${lr}">
							<div class="timeline-body">
								<div class="timeline-meta">
									<div class="d-inline-flex">
										<span class="text-black">${timeline_content[i].date.toLocaleDateString('en-GB', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>
									</div>
								</div>
								<div class="timeline-content">
									<div class="card">
										<div class="card-body p-xl-2">
											<h2 class="card-title mb-4">
												${timeline_content[i].title}
											</h2>
											<p>
                                            ${timeline_content[i].content}
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>`
}

text_timeline_list.innerHTML = temp_timeline