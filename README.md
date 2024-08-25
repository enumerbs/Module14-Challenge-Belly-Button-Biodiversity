# Module14-Challenge-Belly-Button-Biodiversity

Data Analytics Boot Camp - Module 14 - Interactive Visualisations \
Belly Button Biodiversity Challenge

---

# Results

To use the 'Belly Button Biodiversity Dashboard':
1. load the ***index.html*** file in your browser, and
1. use the 'Test Subject ID Number' drop-down to select the desired test subject ID number to see that person's:
    - Demographic information, and
    - Bacteria Cultures results.

# Implementation notes

HTML error: "Select element must have an accessible name"
- To avoid this Accessibility-related error in the HTML starter-file code, a `label` element was added for the `select` element.

- Refer to the following page for more details: https://dequeuniversity.com/rules/axe/4.7/select-name?application=axeAPI

# References

The following references were used in the development of the solution for this Challenge.

## JavaScript
### Type conversion
- Convert integer to string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

## Plotly.js
### Figure reference - general settings
- Plot title and axes labels https://plotly.com/javascript/figure-labels/
### Figure reference - Bubble charts
- https://plot.ly/javascript/bubble-charts/
- Scatter chart trace settings https://plotly.com/javascript/reference/#scatter
- Related article with similar information about configuring 'hoverinfo' https://stackoverflow.com/questions/77179677/adding-hover-text-over-bubble-chart-in-plotly-js
