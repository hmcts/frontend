# Timeline

- [Guidance](https://hmcts-design-system.herokuapp.com/components/timeline)
- [Preview](https://hmcts-frontend.herokuapp.com/components/timeline)

## Arguments

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col">Name</th>
      <th class="govuk-table__header" scope="col">Type</th>
      <th class="govuk-table__header" scope="col">Required</th>
      <th class="govuk-table__header" scope="col">Description</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">headingLevel</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">No</td>
      <td class="govuk-table__cell ">Optional additional classes to add to timeline container.</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">classes</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">No</td>
      <td class="govuk-table__cell ">Optional additional classes to add to timeline container.</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">events</th>
      <td class="govuk-table__cell ">Array</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Array of event item objects</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.title</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Event title</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.by</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Event byline</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.dateUtc</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Event date UTC format</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.date</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Event date</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.time</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">No</td>
      <td class="govuk-table__cell ">Event time</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.documents</th>
      <td class="govuk-table__cell ">Array</td>
      <td class="govuk-table__cell ">No</td>
      <td class="govuk-table__cell ">Array of documents relating to the event</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.documents.{}.href</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Url for document (either page or file download)</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.documents.{}.name</th>
      <td class="govuk-table__cell ">String</td>
      <td class="govuk-table__cell ">Yes</td>
      <td class="govuk-table__cell ">Document name</td>
    </tr>
  </tbody>
</table>