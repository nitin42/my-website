import tags from 'html-tags'
import svgTags from 'svg-tag-names'

export const DOMELEMENTS = [...tags, ...svgTags]
export const isSVG = el => el instanceof SVGElement
export const isDOM = el => el.nodeType || isSVG(el)
export const arrayContains = (arr, val) => {
  return arr.some(a => a === val)
}
export const stringToHyphens = str => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
