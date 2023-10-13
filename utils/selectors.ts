import { ExperienceSelectors } from "./types"

export const basicProfileSelectors = {
  fullName: ".pv-text-details__title h1",
  title: ".text-body-medium.break-words",
  location: "span.text-body-small.inline.t-black--light.break-words",
  photo: ".pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.evi-image.ember-view", // Use the previous selector for the photo
}

export const experienceSelectors : any = {
  title : "#profilePagedListComponent-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-EXPERIENCE-VIEW-DETAILS-profile-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-NONE-en-US-0 > div > div > div.display-flex.flex-column.full-width.align-self-center > div > div.display-flex.flex-column.full-width > div > div > div > div > span:nth-child(1)",
  company: "#profilePagedListComponent-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-EXPERIENCE-VIEW-DETAILS-profile-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-NONE-en-US-0 > div > div > div.display-flex.flex-column.full-width.align-self-center > div > div.display-flex.flex-column.full-width > span:nth-child(2) > span:nth-child(1)",
  date:"#profilePagedListComponent-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-EXPERIENCE-VIEW-DETAILS-profile-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-NONE-en-US-0 > div > div > div.display-flex.flex-column.full-width.align-self-center > div > div.display-flex.flex-column.full-width > span.t-14.t-normal.t-black--light > span:nth-child(1)",
  location:"#profilePagedListComponent-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-EXPERIENCE-VIEW-DETAILS-profile-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-NONE-en-US-2 > div > div > div.display-flex.flex-column.full-width.align-self-center > div.display-flex.flex-row.justify-space-between > div.display-flex.flex-column.full-width > span:nth-child(4) > span:nth-child(1)",
  description:"#profilePagedListComponent-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-EXPERIENCE-VIEW-DETAILS-profile-ACoAAAF9B5sBl7jhtDyH-0AsdPsV2KvZ-ZhqIJ0-NONE-en-US-2 > div > div > div.display-flex.flex-column.full-width.align-self-center > div.pvs-list__outer-container.pvs-entity__sub-components > ul > li > div > ul > li > div > div > div > span:nth-child(1)"
}
