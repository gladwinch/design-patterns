// Base Class
class ReportGenerator {
    generate() {
        this.fetchData();
        this.processData();
        this.render(); // This will vary based on the report type
    }

    fetchData() {
        console.log("Fetching data...");
    }

    processData() {
        console.log("Processing data...");
    }

    render() {
        throw new Error("Subclass must implement the 'render' method.");
    }
}