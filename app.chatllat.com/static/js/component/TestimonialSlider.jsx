import Slider from 'react-slick';
import StarRating from './StarRating';

const testimonials = [
    { 
        id: 1, 
        avatar: '/i.pravatar.cc/150?img=1',
        name: 'Jenny Wilson', 
        rating: 3.5,
        review: 'Using Chatllat was a game-changer. I hired a Solidity  dev in minutes—no signup, no profile browsing. Just connected, agreed, and the work was flawless.'
    },
    {
        id: 2,
        avatar: 'https://i.pravatar.cc/150?img=2',
        name: 'Ronald Richards',
        rating: 4.5,
        review: 'Incredible experience! Found a skilled dev in minutes and everything was smooth. Chatllat made it effortless.'
    },
    {
        id: 3,
        avatar: 'https://i.pravatar.cc/150?img=3',
        name: 'Esther Howard',
        rating: 3.0,
        review: 'Loved the simplicity. No profiles to scroll through. Connected and got work done securely.'
    },
    {
        id: 4,
        avatar: 'https://i.pravatar.cc/150?img=4',
        name: 'Albert Flores',
        rating: 4.5,
        review: 'Fast, secure, and easy to use. Chatllat is definitely the future of freelance contracting.'
    },
    {
        id: 5,
        avatar: 'https://i.pravatar.cc/150?img=5',
        name: 'Courtney Henry',
        rating: 4,
        review: 'Very convenient. No middlemen, just direct interaction and secure payments.'
    },
    {
        id: 6,
        avatar: 'https://i.pravatar.cc/150?img=6',
        name: 'Cameron Williamson',
        rating: 5,
        review: 'Seamless and intuitive. I trusted the process and it didn’t disappoint.'
    },
    {
        id: 7,
        avatar: 'https://i.pravatar.cc/150?img=7',
        name: 'Savannah Nguyen',
        rating: 5,
        review: 'As a first-time user, I was amazed how quickly everything worked out. Very secure too.'
    },
    {
        id: 8,
        avatar: 'https://i.pravatar.cc/150?img=8',
        name: 'Jacob Jones',
        rating: 4,
        review: 'Secure wallet-based agreement was a highlight. No issues, just clean execution.'
    },
    {
        id: 9,
        avatar: 'https://i.pravatar.cc/150?img=9',
        name: 'Dianne Russell',
        rating: 4.5,
        review: 'Game-changing platform. Love how fast and secure everything is. Totally recommend!'
    },
    {
        id: 10,
        avatar: 'https://i.pravatar.cc/150?img=10',
        name: 'Wade Warren',
        rating: 4.5,
        review: 'The escrow system was perfect for trustless payment. Everything felt professional.'
    },
    {
        id: 11,
        avatar: 'https://i.pravatar.cc/150?img=11',
        name: 'Arlene McCoy',
        rating: 4,
        review: 'Smooth interface, fast matching, and secure payments. Chatllat nailed it!'
    }
];

const settings = {
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  infinite: true,
  speed: 500,
  arrows: true,
  responsive: [
    {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    },
  ]
};

export default function TestimonialSlider() {
  return (
    <div className="w-full relative" data-aos="fade-up" data-aos-delay="400">
        <div className='max-w-80 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-primary/10 to-pink/10 blur-3xl'></div>
        <div className='w-1/4 h-full absolute top-0 left-0 bg-gradient-to-r from-dark-900 to-transparent z-10'></div>
        <div className='w-1/4 h-full absolute top-0 right-0 bg-gradient-to-r from-transparent to-dark-900 z-10'></div>
        <Slider {...settings} className='custom-slider py-10 md:py-16'>
            {testimonials.map((t) => (
                <div key={t.id} className="px-0">
                    <div className='group bg-gradient-to-b from-dark-950/0 to-dark-950/40 rounded-3xl p-px'>
                        <div className='rounded-3xl p-6 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full h-full' style={{background: 'radial-gradient(80% 80% at 50% -30%, rgba(153, 128, 193, 0.3) 0%, rgb(14, 18, 24) 100%)'}}></div>
                            <div className='relative text-center text-white'>
                                <div className='w-12 md:w-16 h-12 md:h-16 mx-auto rounded-full mb-2.5 overflow-hidden'>
                                    <img src={t.avatar} alt={t.name} className='w-full h-full object-cover' />
                                </div>
                                <h3 className="text-base md:text-lg font-normal tracking-wider mb-2">{t.name}</h3>
                                <div className="flex items-center justify-center gap-2 text-base font-normal">
                                    <span>{t.rating}</span>
                                    <StarRating rating={t.rating} />
                                </div>
                                <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-900/40 to-transparent my-4'></div>
                                <p className='text-white text-opacity-90 text-base md:text-lg font-normal tracking-wide'>"{t.review}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  );
}
