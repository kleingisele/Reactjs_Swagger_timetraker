(function() {
  const reportsContainer = document.getElementById('reports-container')
  const dateRange = document.getElementById('date-range')
  const totalTime = document.getElementById('total-time')
  const reportsJSON = localStorage.getItem('timetracker-print-records')
  const translationsJSON = localStorage.getItem('timetracker-print-records-translations')
  const reports = JSON.parse(reportsJSON)
  const entryModeByHours = reports.entryModeByHours
  dateRange.innerText = reports.startDate + ' - ' + reports.endDate
  totalTime.innerText = reports.totalTime
  internationalizeLabels(JSON.parse(translationsJSON))

  reports.items.forEach(x => reportsContainer.appendChild(createRow(x, entryModeByHours)))

  window.print()

  function createDateColumn(report) {
    const td = document.createElement('td')
    td.className = 'date'
    td.innerText = report.date
    return td
  }

  function createProjectColumn(project) {
    const td = document.createElement('td')
    td.className = 'res-width'

    const p = document.createElement('p')
    p.className = 'p-td'
    p.innerText = project.name

    td.appendChild(p)
    return td
  }

  function createDurationColumn(report, entryModeByHours) {
    const td = document.createElement('td')

    if(!entryModeByHours){
      const p = document.createElement('p')
      p.className = 'p-td-duration'
      p.innerText = report.startTime + ' - ' + report.endTime
      td.appendChild(p)
    }

    const span = document.createElement('span')
    span.className = 'span-td-dutation'
    span.innerText = report.totalTime

    td.appendChild(span)
    return td
  }

  function createUserColumn(worker) {
    const td = document.createElement('td')
    td.className = 'user-name'
    td.innerText = worker.username
    return td
  }

  function createWorkstepColumn(workstep) {
    const td = document.createElement('td')
    td.className = 'workstep'
    td.innerText = workstep.name
    return td
  }

  function internationalizeLabels(translations) {
    if (!translations) {
      return
    }
    
    const componentsToInternationalize = document.getElementsByClassName("label-intl")
    
    for (let i = 0; i < componentsToInternationalize.length; i++) {
      const component = componentsToInternationalize[i]
      const translation = translations[component.id]
      
      if (translation){
        component.innerText = translation
      }
    }
  }

  function createRow(report, entryModeByHours) {
    const tr = document.createElement('tr')
    tr.appendChild(createDateColumn(report))
    tr.appendChild(createProjectColumn(report.project))
    tr.appendChild(createWorkstepColumn(report.workStep))
    tr.appendChild(createDurationColumn(report, entryModeByHours))
    tr.appendChild(createUserColumn(report.worker))
    return tr
  }
})()