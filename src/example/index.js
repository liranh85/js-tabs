import JsTabs from '..'
import './index.scss'

// Example 1: standard tabs
const myTabs = new JsTabs({
  elm: '#example-js-tabs'
})
myTabs.init()

// Example 2: tabs without a marker
const tabsNoMarker = new JsTabs({
  elm: '#example-js-tabs-no-marker'
})
tabsNoMarker.init()

// Example 3: nested tabs
const tabsNesting = new JsTabs({
  elm: '#example-js-tabs-nesting'
})
tabsNesting.init()

const tabsNested = new JsTabs({
  elm: '#example-js-tabs-nested'
})
tabsNested.init()

// Example 4: different colored tabs
const tabsMulticolor = new JsTabs({
  elm: '#example-js-tabs-multicolor'
})
tabsMulticolor.init()
