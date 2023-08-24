const ReportGenerator = require('./ReportGenerator')

// Derived Class for HTML Report
class HTMLReportGenerator extends ReportGenerator {
    render() {
        console.log("Rendering data as HTML...");
    }
}

// Derived Class for XML Report
class XMLReportGenerator extends ReportGenerator {
    render() {
        console.log("Rendering data as XML...");
    }
}

// Using the templates
const htmlReport = new HTMLReportGenerator();
htmlReport.generate(); // Outputs: Fetching data... Processing data... Rendering data as HTML...

const xmlReport = new XMLReportGenerator();
xmlReport.generate()

// In the above example, the ReportGenerator class has a method generate 
// which defines the structure of generating a report. 
// The rendering part is abstract and is supposed to be defined by its subclasses. 
// The HTMLReportGenerator and XMLReportGenerator are subclasses that implement the 
// render method to provide the actual implementation details for their specific type 
// of report.

// This pattern ensures that the algorithm structure is preserved in the base class
// while allowing subclasses to provide their specific implementations for certain 
// steps.