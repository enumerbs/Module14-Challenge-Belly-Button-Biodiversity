# Module14-Challenge-Belly-Button-Biodiversity

Data Analytics Boot Camp - Module 14 - Interactive Visualisations \
Belly Button Biodiversity Challenge

---

# Results

To access the 'Belly Button Biodiversity Dashboard' for this project, either:
1. Visit this repository's GitHub Pages site at: https://enumerbs.github.io/Module14-Challenge-Belly-Button-Biodiversity/
or
1. load the ***index.html*** file from the repository in your browser.

Then, in either case, use the 'Test Subject ID Number' drop-down to select the desired test subject ID number to see that person's:
- Demographic information, and
- Bacteria Cultures results.

# Implementation notes

HTML error: "Select element must have an accessible name"
- To avoid this Accessibility-related error in the HTML starter-file code, a `label` element was added for the `select` element.

- Refer to the following page for more details: https://dequeuniversity.com/rules/axe/4.7/select-name?application=axeAPI

# References

The following references were used in the development of the solution for this Challenge.

## GitHub Pages

- Documentation https://docs.github.com/en/pages
- Configuring a publishing source for your GitHub Pages site https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## HTML
### Elements, attributes, and events
- `select` element
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
    - https://www.w3schools.com/tags/att_option_selected.asp

## JavaScript
### Type conversion
- Convert integer to string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

## Plotly.js
- Class notes/sample files for 'Interative Visualisations', Monash University 'Data Analytics Boot Camp'
### Figure reference - general settings
- Plot title and axes labels
    - General information https://plotly.com/javascript/figure-labels/
    - Making titles appear bold https://stackoverflow.com/questions/62572772/control-weight-boldness-of-axis-values-in-plotly-javascript
### Figure reference - Bubble charts
- https://plot.ly/javascript/bubble-charts/
- Scatter chart trace settings https://plotly.com/javascript/reference/#scatter
- Related article with similar information about configuring 'hoverinfo' https://stackoverflow.com/questions/77179677/adding-hover-text-over-bubble-chart-in-plotly-js
