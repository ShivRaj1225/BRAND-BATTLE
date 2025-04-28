const team = [
    {
      name: 'Rohit Pote',
      role: 'Founder & CEO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcLxdnF7uf5xeaHC6B-SjYkNPFABZtwU9Kw&s', // Replace with actual image URL
    },
    {
      name: 'Tejas Salunkhe',
      role: 'Co-Founder & CTO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhnMCn4I6WO27zLR3w4X-eW8H994Y7OxVBg&s', // Replace with actual image URL
    },
  ]
  
  const TeamSection = () => {
    return (
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {team.map((member, idx) => (
            <div key={idx} className=" rounded-2xl p-6 w-72 text-center shadow-lg">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default TeamSection