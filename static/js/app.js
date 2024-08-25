// -----------------------------------------------------------------------------------------------------
// Build the metadata panel

function buildMetadata(sampleName) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let sampleMetadata = metadata.filter(item => item.id == sampleName)[0];

    // Use D3 to select the panel with id of `#sample-metadata`
    let sampleMetadataPanel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    sampleMetadataPanel.html("");

    // Inside a loop, you will need to use d3 to append new tags for each key-value in the filtered metadata.
    let sampleMetadataKeys = Object.keys(sampleMetadata);
    let sampleMetadataValues = Object.values(sampleMetadata);
    let sampleMetadataHtmlString = ""
    for (i=0; i < sampleMetadataKeys.length; i++) {
      // Show the 'key' as bold text, followed by the 'value', and end each key-value pair with an HTML line break
      sampleMetadataHtmlString += `<strong>${sampleMetadataKeys[i].toUpperCase()}</strong>: ${sampleMetadataValues[i]}</br>`;
    }
    sampleMetadataPanel.html(sampleMetadataHtmlString);
  });
}

// -----------------------------------------------------------------------------------------------------
// Function to build both charts

function buildCharts(sampleName) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let sample = samples.filter(item => item.id == sampleName)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = sample.otu_ids;
    let otu_labels = sample.otu_labels;
    let sample_values = sample.sample_values;

    // Build a Bubble Chart
    var bubbleTrace = {
      type: 'scatter',
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        hoverinfo: 'text'
      },
      text: otu_labels
    };

    var data = [bubbleTrace];

    var layout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {
        title: 'OTU ID'
      },
      yaxis: {
        title: 'Number of Bacteria'
      },

      showlegend: false
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', data, layout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// -----------------------------------------------------------------------------------------------------
// Function to run on page load

function init() {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select (dropdown) options.
    // Get the first sample from the list.
    let firstSampleName = names[0];
    // Use D3 to append a first option and mark it as the initially selected item.
    dropdown.append("option")
              .attr("selected", "selected")
              .attr("value", firstSampleName)
              .text(firstSampleName);
    // Use D3 to append a new option for each additional sample name beyond the first.
    for (i=1; i < names.length; i++) {
      dropdown.append("option")
              .attr("value", names[i])
              .text(names[i]);
    }

    // Build charts and metadata panel with the first sample
    optionChanged(firstSampleName)
  });
}

// -----------------------------------------------------------------------------------------------------
// Function for event listener

function optionChanged(newSampleName) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSampleName);
  buildCharts(newSampleName);
}

// -----------------------------------------------------------------------------------------------------
// Initialise the dashboard

init();

// -----------------------------------------------------------------------------------------------------
