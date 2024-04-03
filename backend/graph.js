
class Graph {
    constructor() {
        this.vertices = [];
        this.edges = {};
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(source, destination, weight) {
        if (!this.vertices.includes(source)) {
            this.addVertex(source);
        }
        if (!this.vertices.includes(destination)) {
            this.addVertex(destination);
        }
        this.edges[source].push({ destination, weight });
        this.edges[destination].push({ source, weight });
    }

  
    dijkstra(start) {
        const distances = {};
        const visited = {};
        const previous = {};
        const queue = [];

        this.vertices.forEach(vertex => {
            distances[vertex] = Infinity;
            previous[vertex] = null;
        });

        distances[start] = 0;

       
        this.vertices.forEach(vertex => {
            queue.push({ vertex, distance: distances[vertex] });
        });

        while (queue.length) {
          
            queue.sort((a, b) => a.distance - b.distance);
            const { vertex: current } = queue.shift();
            visited[current] = true;
            this.edges[current].forEach(({ destination, weight }) => {
                if (!visited[destination]) {
                    const totalDistance = distances[current] + weight;
                    if (totalDistance < distances[destination]) {
                        distances[destination] = totalDistance;
                        previous[destination] = current;
                        queue.find(v => v.vertex === destination).distance = totalDistance;
                    }
                }
            });
            // console.log(distances);
        }

    return { distances}
    }
    };



const graph = new Graph();
const cities = ["ajmer", "bangalore", "calcutta", "dehradun", "etawah", "faridabad"];
cities.forEach(city => graph.addVertex(city));
graph.addEdge("ajmer", "bangalore", 5);
graph.addEdge("ajmer", "calcutta", 7);
graph.addEdge("bangalore", "dehradun", 15);
graph.addEdge("bangalore", "etawah",20);
graph.addEdge("bangalore", "ajmer",5);
graph.addEdge("calcutta","dehradun",5);
graph.addEdge("calcutta","etawah",35);
graph.addEdge("calcutta","ajmer",7);
graph.addEdge("dehradun","bangalore",15);
graph.addEdge("dehradun","calcutta",5);
graph.addEdge("dehradun","faridabad",20);
graph.addEdge("etawah","faridabad",10);
graph.addEdge("etawah","bangalore",20);
graph.addEdge("etawah","calcutta",35);
graph.addEdge("faridabad","etawah",10);
graph.addEdge("faridabad","dehradun",20);

// graph.dijkstra("ajmer");
module.exports=graph;
