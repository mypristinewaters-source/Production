import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jessica H.',
      location: 'Brazoria County, TX',
      rating: 5,
      text: 'Corey is dependable and does an amazing job making sure our pool is beautiful!',
      avatar: 'JH',
    },
    {
      name: 'Nick S.',
      location: 'Brazoria County, TX',
      rating: 5,
      text: 'I\'ve been using Pristine Waters for a few months now and Corey has been fantastic. He\'s super reliable and always makes sure everything is perfect before he leaves. My pool stays crystal clear week after week. Really happy with the service and would recommend him to anyone looking for quality pool care.',
      avatar: 'NS',
    },
    {
      name: 'Mark T.',
      location: 'Brazoria County, TX',
      rating: 5,
      text: 'Corey with Pristine Waters is absolutely dependable. He shows up when he says he will and does a thorough job every single time. My pool looks gorgeous and I finally don\'t stress about the maintenance anymore. If you want someone who actually cares about keeping your pool in great shape, definitely give him a call!',
      avatar: 'MT',
    },
  ]

  return (
    <section id="testimonials" className="pt-0 pb-4 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 border border-primary-200 hover:-translate-y-1 flex flex-col"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(20, 184, 166, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="flex-grow">
                {/* Stars */}
                <div className="flex mb-2 gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-3 leading-snug text-sm">"{testimonial.text}"</p>
              </div>

              {/* Author */}
              <div className="flex items-center pt-2 border-t border-gray-100 mt-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-2 text-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-xs">{testimonial.name}</div>
                  <div className="text-[10px] text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
