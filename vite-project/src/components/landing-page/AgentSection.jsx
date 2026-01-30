import React from 'react'
import { Link } from '@mui/material';
const AgentDetails = [
  {
    image: "public/Agents/agent1.jpg",
    name: "John Doe",
    detail: "Top Seller",
  },
  {
    image: "public/Agents/agent2.jpg",
    name: "Jane Smith",
    detail: "Top Seller",
  },
  {
    image: "public/Agents/agent3.jpg",
    name: "Michael Brown",
    detail: "Customer Favorite",
  },
  {
    image: "public/Agents/agent4.jpg",
    name: "Emily Johnson",
    detail: "Sales Specialist"
  },
];
function AgentSection() {
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Agents</h2>
            <p className="text-center text-gray-600 mt-2">Meet our trusted agents</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {AgentDetails.map((agent, index) => (
                <Link underline="none" href="agent-detail.jsx" className="text-center transition-transform duration-300 hover:scale-105">
                    <img src={agent.image} alt="Agent" className="w-32 h-32 mx-auto rounded-full border-4 bg/agent1.jpgorder-blue-600 shadow-lg" />
                    <p className="mt-4 text-lg font-bold text-gray-800">{agent.name}</p>
                    <p className="text-gray-500">{agent.detail}</p>
                </Link>
                
              ))}
            </div>
        </div>
      </section> 
    </>
  )
}

export default AgentSection
