import React from 'react'
import tags from 'html-tags'
import svgTags from 'svg-tag-names'

import {
  isSVG,
  isDOM,
  arrayContains,
  stringToHyphens,
} from './utils/engineUtils'

export const validTransforms = [
  'translateX',
  'translateY',
  'translateZ',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skewX',
  'skewY',
  'perspective',
]

const getCSSValue = (el, prop) => {
  if (prop in el.style) {
    return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0'
  }
}

// Get the animation type property i.e 'transform', 'css'
export const getAnimationType = (el, prop) => {
  if (isDOM(el) && arrayContains(validTransforms, prop)) return 'transform'
  if (isDOM(el) && (el.getAttribute(prop) || (isSVG(el) && el[prop])))
    return 'attribute'
  if (isDOM(el) && (prop !== 'transform' && getCSSValue(el, prop))) return 'css'
  if (el[prop] != null) return 'object'
}
