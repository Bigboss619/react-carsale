import React from 'react'

function AgentSection() {
    document.addEventListener("DOMContentLoaded", function () {
            // Slow animation on page load
            let agents = document.querySelectorAll(".fade-in");
            agents.forEach((agent, index) => {
                setTimeout(() => {
                    agent.classList.add("show");
                }, index * 200);
            });

            // Search filter by location or name
            document.getElementById("search").addEventListener("input", function () {
                let searchValue = this.value.toLowerCase();
                let agents = document.querySelectorAll(".agent-card");
                agents.forEach(agent => {
                    let name = agent.querySelector("h2").textContent.toLowerCase();
                    let location = agent.querySelector("p").textContent.toLowerCase();
                    if (name.includes(searchValue) || location.includes(searchValue)) {
                        agent.style.display = "block";
                    } else {
                        agent.style.display = "none";
                    }
                });
            });
        });
  return (
    <>
        <div className="container-fluid mx-auto mt-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-4xl font-extrabold mb-4 md:mb-0">Our Agents</h1>
                <input type="text" id="search" aria-label="Search by location or name" placeholder="Search by location or name..." className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm w-full md:w-1/3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300" />
            </div>

            <div id="agents-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <a href="agent-detail.html" className="agent-card bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl fade-in" aria-labelledby="agent1">
                <img src="Agents/agent1.jpg" alt="Agent 1" className="w-full h-44 object-cover rounded-t-xl" />
                <h2 id="agent1" className="text-xl font-semibold text-center mt-3">John Doe</h2>
                <p className="text-gray-600 text-sm text-center">Anambra State</p>
            </a>
            <a href="agent-detail.html" className="agent-card bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl fade-in" aria-labelledby="agent2">
                <img src="Agents/agent2.jpg" alt="Agent 2" className="w-full h-44 object-cover rounded-t-xl" />
                <h2 id="agent2" className="text-xl font-semibold text-center mt-3">Jane Smith</h2>
                <p className="text-gray-600 text-sm text-center">Lagos State</p>
            </a>
            <a href="agent-detail.html" className="agent-card bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl fade-in" aria-labelledby="agent3">
                <img src="Agents/agent3.jpg" alt="Agent 3" className="w-full h-44 object-cover rounded-t-xl" />
                <h2 id="agent3" className="text-xl font-semibold text-center mt-3">Isaac James</h2>
                <p className="text-gray-600 text-sm text-center">Abia State</p>
            </a>
            {/* <!-- More agents can be added here --> */}
            </div>
        </div> 
    </>
  )
}

export default AgentSection
