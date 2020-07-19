(function() {
  const reportsContainer = document.getElementById('reports-container')
  const dateRange = document.getElementById('date-range')
  const reportsJSON = localStorage.getItem('timetracker-print-records')
  const translationsJSON = localStorage.getItem('timetracker-print-records-translations')
  const reports = JSON.parse(reportsJSON)
  dateRange.innerText = reports.startDate + ' - ' + reports.endDate
  internationalizeLabels(JSON.parse(translationsJSON))

  reports.items.forEach(x => reportsContainer.appendChild(createRow(x)))

  window.print()

  function createDateColumn(report) {
    const td = document.createElement('td')
    td.className = 'date'
    td.innerText = report.date
    return td
  }

  function createDescriptionColumn(description, customer, project) {
    const td = document.createElement('td')
    td.className = 'res-width'

    const p = document.createElement('p')
    p.className = 'p-td'
    p.innerText = description

    const span = document.createElement('span')
    span.className = 'span-td'
    p.innerText = customer.name + ' - ' + project.name

    td.appendChild(p)
    td.appendChild(span)
    return td
  }

  function createMateriaColumn(report) {
    const td = document.createElement('td')

    const p = document.createElement('p')
    p.className = 'p-td'
    p.innerText = report.material.name

    const span = document.createElement('span')
    span.className = 'span-td'
    span.innerText = report.material.unit

    td.appendChild(p)
    td.appendChild(span)
    return td
  }

  function createQuantityColumn(report) {
    const td = document.createElement('td')
    td.className = 'q'
    td.innerText = report.quantity
    return td
  }

  function createUserColumn(worker) {
    const td = document.createElement('td')
    td.className = 'user-name'
    td.innerText = worker.username
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

  function createRow(report) {
    const tr = document.createElement('tr')
    tr.appendChild(createDateColumn(report))
    tr.appendChild(createDescriptionColumn(report.description, report.customer, report.project))
    tr.appendChild(createMateriaColumn(report))
    tr.appendChild(createQuantityColumn(report))
    tr.appendChild(createUserColumn(report.worker))
    return tr
  }
})()