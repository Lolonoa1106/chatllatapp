import React, { useState, useEffect } from 'react';
import TelegramIcon from './../assets/images/icons/telegram_logo.png'
import DiscordIcon from './../assets/images/icons/discord-icon.png'
// import { 
//     AlertCircle, 
//     Shield, 
//     Lock, 
//     User, 
//     MessageSquare, 
//     CheckCircle, 
//     XCircle, 
//     Trophy, 
//     Share2, 
//     Hash, 
//     AtSign, 
//     Zap, 
//     Sparkles 
// } from 'lucide-react';

// ScammerSimulator Component - Reusable game component
const ScammerSimulator = ({ isOpen, onClose }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [choices, setChoices] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [customScenes, setCustomScenes] = useState([]);

  const platformThemes = {
    telegram: {
      primary: 'bg-gradient-to-r from-blue-400 to-blue-600',
      primaryText: 'text-gray-800',
      bgChat: 'bg-gradient-to-b from-gray-100 to-zinc-100',
      bgMessage: 'bg-white',
      bgUserMessage: 'bg-gradient-to-r from-blue-500 to-blue-600',
      headerBg: 'bg-gradient-to-r to-[#3390ec] from-blue-500',
      buttonBg: 'bg-blue-500 hover:bg-blue-600',
      accent: 'border-blue-500',
      icon: TelegramIcon,
      name: 'Telegram'
    },
    discord: {
      primary: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      primaryText: 'text-gray-500',
      bgChat: 'bg-zinc-950',
      bgMessage: 'bg-gray-600',
      bgUserMessage: 'bg-indigo-500',
      headerBg: 'bg-zinc-800',
      buttonBg: 'bg-indigo-500 hover:bg-indigo-600',
      accent: 'border-indigo-500',
      icon: DiscordIcon,
      name: 'Discord'
    }
  };

  const theme = selectedPlatform ? platformThemes[selectedPlatform] : platformThemes.telegram;

  const baseScenes = [
    {
      id: 'intro',
      type: 'intro',
      title: 'Scammer Simulator',
      subtitle: 'Can You Get Away With It?',
      description: 'Test your freelance fate in the crypto world',
    },
    {
      id: 'platform-select',
      type: 'platform-select',
      title: 'Choose Your Battlefield',
      subtitle: 'Where does the scam attempt begin?',
    },
    {
      id: 'telegram',
      type: 'chat',
      platform: selectedPlatform === 'discord' ? 'Discord' : 'Telegram',
      title: 'Scene 1: The Trap',
      messages: [
        { sender: 'client', text: "Hi! I need a quick landing page. Can you do it?", avatar: '👤', username: 'Client_0xA3F' },
      ],
      options: [
        { id: 'A', text: 'Sure. Send 50% upfront to 0xFAKE123', correct: false },
        { id: 'B', text: "Sure. Let's use Chatllat Escrow to stay safe", correct: true },
      ],
      results: {
        A: { message: "❌ He ghosted you. Again.", animation: 'shake' },
        B: { message: "✅ Smart move. Escrow activated. No risk.", animation: 'pulse' },
      }
    },
    {
      id: 'discord',
      type: 'chat',
      platform: selectedPlatform === 'discord' ? 'Discord' : 'Telegram',
      title: 'Scene 2: Client Chaos',
      messages: [
        { sender: 'dev', text: "I'll finish the smart contract in 2 days. Just send USDT now.", avatar: '💻', username: 'Dev_0x5BCC' },
      ],
      options: [
        { id: 'A', text: 'Alright, sending 200 USDT', correct: false },
        { id: 'B', text: "Let's use Chatllat escrow — safer for both of us", correct: true },
      ],
      results: {
        A: { message: "❌ You just got rugged. Again.", animation: 'shake' },
        B: { message: "✅ Deal secured. You stay in control.", animation: 'pulse' },
      }
    },
    {
      id: 'dispute',
      type: 'agreement',
      title: 'Scene 3: Dispute Drama',
      description: 'Developer uploads final work',
      clientMessage: "Hmm... not good enough. I'm not paying.",
      options: [
        { id: 'A', text: 'Try to argue in DMs', correct: false },
        { id: 'B', text: 'Open a Chatllat Dispute', correct: true },
      ],
      results: {
        A: { message: "❌ Lost in the void. No response.", animation: 'fade' },
        B: { message: "✅ Chatllat resolved your dispute fairly.", animation: 'pulse' },
      }
    },
    {
      id: 'final',
      type: 'final',
      title: 'Game Over',
    }
  ];

  const scenes = [...baseScenes.slice(0, -1), ...customScenes, baseScenes[baseScenes.length - 1]];

  const addCustomScene = (sceneJSON) => {
    try {
      const newScene = typeof sceneJSON === 'string' ? JSON.parse(sceneJSON) : sceneJSON;
      setCustomScenes(prev => [...prev, newScene]);
      return true;
    } catch (error) {
      console.error('Error adding scene:', error);
      return false;
    }
  };

  useEffect(() => {
    window.addSceneToGame = addCustomScene;
    
    window.exampleScene = {
      id: 'custom-1',
      type: 'chat',
      platform: 'dynamic',
      title: 'Scene 4: The NFT Hustle',
      messages: [
        { sender: 'client', text: "I need 10 NFTs designed ASAP. Can pay in our new token!", avatar: '🎨', username: 'NFTBro_420' }
      ],
      options: [
        { id: 'A', text: 'Sure! Send the tokens first, I\'ll start right away', correct: false },
        { id: 'B', text: 'Interesting! Let\'s set up escrow with stable coins instead', correct: true }
      ],
      results: {
        A: { message: "❌ The token was a rugpull. Value = $0", animation: 'shake' },
        B: { message: "✅ Smart! You avoided the token scam", animation: 'pulse' }
      }
    };
    
    console.log('🎮 To add a custom scene, use: window.addSceneToGame(sceneJSON)');
    console.log('📝 Example scene structure available at: window.exampleScene');
  }, []);

  const handleChoice = (scene, optionId) => {
    setAnimating(true);
    const choice = { scene: scene.id, choice: optionId, correct: scene.options.find(o => o.id === optionId).correct };
    const newChoices = [...choices, choice];
    setChoices(newChoices);
    
    if (choice.correct) {
      setScore(score + 1);
    }

    setShowResult(true);
    
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handleNextScene = () => {
    setShowResult(false);
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const resetGame = () => {
    setCurrentScene(0);
    setChoices([]);
    setScore(0);
    setShowResult(false);
    setSelectedPlatform(null);
  };

  const startGame = () => {
    setCurrentScene(1);
  };

  const selectPlatform = (platform) => {
    setSelectedPlatform(platform);
    setCurrentScene(2);
  };

  const renderScene = () => {
    const scene = scenes[currentScene];
    const isDiscord = selectedPlatform === 'discord';

    if (scene.type === 'intro') {
      return (
        <div className="text-center space-y-6 py-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-green blur-3xl opacity-20 animate-pulse"></div>
            <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-primary to-green bg-clip-text text-transparent relative">
              {scene.title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">{scene.subtitle}</p>
          <p className="text-gray-500">{scene.description}</p>
          
          <div className="flex justify-center space-x-4 pt-8">
            <button
              onClick={startGame}
              className="px-6 py-3 bg-gradient-to-r from-primary to-green text-white rounded-full font-medium text-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Play
            </button>
          </div>
          
          <div className="pt-4 text-sm text-gray-500">
            💡 Tip: Each decision matters. Choose wisely.
          </div>
        </div>
      );
    }

    if (scene.type === 'platform-select') {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-primary to-green bg-clip-text text-transparent">
              {scene.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{scene.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <button
              onClick={() => selectPlatform('telegram')}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-center space-y-4">
                {/* <div className="text-4xl md:text-6xl mb-4">✈️</div> */}
                <img src={TelegramIcon} className='w-10 md:w-12 mb-2 mx-auto' alt="" />
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white">Telegram</h3>
                <p className="text-gray-600 dark:text-gray-400">Fast-paced crypto deals</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  {/* <AtSign className="w-4 h-4" /> */}
                  <span>Anonymous chats</span>
                </div>
                <div className="mt-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg inline-block">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Choose Telegram</span>
                </div>
              </div>
            </button>

            <button
              onClick={() => selectPlatform('discord')}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="p-8 text-center space-y-4">
                {/* <div className="text-4xl md:text-6xl mb-4">🎮</div> */}
                <img src={DiscordIcon} className='w-10 md:w-12 mb-2 mx-auto' alt="" />
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white">Discord</h3>
                <p className="text-gray-600 dark:text-gray-400">Developer communities</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  {/* <Hash className="w-4 h-4" /> */}
                  <span>Server-based deals</span>
                </div>
                <div className="mt-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg inline-block">
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">Choose Discord</span>
                </div>
              </div>
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            {/* <AlertCircle className="w-4 h-4 inline mr-1" /> */}
            Platform choice affects the entire game theme
          </div>
        </div>
      );
    }

    if (scene.type === 'chat') {
      
      return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <h2 className={`text-2xl font-semibold ${isDiscord ? 'text-white' : 'text-gray-800'}`}>{scene.title}</h2>
            <div className={`inline-flex items-center space-x-2 mt-2 pl-1 pr-3 py-1 ${isDiscord ? 'bg-zinc-800' : 'bg-zinc-700/20'} rounded-full`}>
              {/* <span className="text-lg">{theme.icon}</span> */}
              <img src={theme.icon} className='w-8 h-8' alt="" />
              <span className={`text-sm font-medium ${theme.primaryText}`}>{theme.name}</span>
            </div>
          </div>

          <div className={`${theme.bgChat} rounded-lg ${isDiscord ? 'p-2' : 'p-4'} space-y-3 min-h-[200px] ${animating && showResult ? 'animate-shake' : ''}`}>
            {isDiscord && (
              <div className="border-b border-gray-600 pb-2 mb-3">
                <div className={`flex items-center space-x-2 text-sm ${isDiscord ? "text-gray-400" : 'text-zinc-800'}`}>
                  {/* <Hash className="w-4 h-4" /> */}
                  <span>freelance-deals</span>
                </div>
              </div>
            )}
            
            {scene.messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'} animate-slideIn`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg.sender === 'you' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* {isDiscord ? ( */}
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{msg.avatar}</div>
                      <div>
                        <div className={`font-medium text-sm ${msg.sender === 'you' ? 'text-indigo-400' : isDiscord ? 'text-gray-300' : 'text-zinc-800'} mb-1`}>
                          {msg.username || 'You'}
                        </div>
                        <div className={`${isDiscord ? 'text-gray-400' : 'text-zinc-700'}`}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  {/* ) : (
                    <>
                      <div className="text-2xl">{msg.avatar}</div>
                      <div className={`px-4 py-2 rounded-lg ${msg.sender === 'you' ? theme.bgUserMessage + ' text-white' : theme.bgMessage + ' text-gray-800'} shadow-sm`}>
                        {msg.text}
                      </div>
                    </>
                  )} */}
                </div>
              </div>
            ))}

            {showResult && (
              <div className="mt-4 animate-fadeIn">
                <div className={`p-3 rounded-lg ${isDiscord ? 'bg-zinc-800 text-gray-200' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-zinc-800'}`}>
                  <p className="text-center font-semibold mb-0">
                    {scene.results[choices[choices.length - 1]?.choice]?.message}
                  </p>
                </div>
                <button
                  onClick={handleNextScene}
                  className={`w-full mt-3 px-6 py-3 ${theme.primary} text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200 shadow-lg flex items-center justify-center space-x-2`}
                >
                  <span>Next</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {!showResult && (
            <div className="space-y-3 mt-6">
              <p className="text-base text-gray-500 text-left font-medium">Your response:</p>
              {scene.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleChoice(scene, option.id)}
                  className={`w-full p-2 md:p-4 text-sm md:text-base text-left bg-white/80 hover:bg-white/100 rounded-lg border-2 border-gray-200 hover:${theme.accent} hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200`}
                >
                  <span className="font-medium">{option.text}</span>
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-4">
            {/* <AlertCircle className="w-4 h-4" /> */}
            <span>Scammers love upfront payments</span>
          </div>
        </div>
      );
    }

    if (scene.type === 'agreement') {
      return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <h2 className={`text-2xl font-medium ${isDiscord ? 'text-white' : 'text-gray-800'}`}>{scene.title}</h2>
          </div>

          <div className={`bg-gradient-to-br ${isDiscord ? 'from-neutral-950 to-stone-900' : 'from-neutral-100 to-stone-100'} rounded-lg p-6 ${animating && showResult ? 'animate-pulse' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {/* <Lock className={`w-5 h-5 ${theme.primaryText}`} /> */}
                <span className={`font-semibold ${isDiscord ? 'text-gray-200' : 'text-zinc-800'}`}>Chatllat Agreement #2847</span>
              </div>
              <span className={`text-sm font-medium ${isDiscord ? 'text-gray-400' : 'text-gray-600'}`}>Escrow Active</span>
            </div>

            <div className={`${isDiscord ? 'bg-white/10' : 'bg-gray-900/10'} rounded-lg p-4`}>
              <p className={`text-sm mb-2 ${isDiscord ? 'text-gray-300' : 'text-zinc-800'}`}>{scene.description}</p>
              <div className="flex items-start space-x-2">
                {/* <User className="w-5 h-5 text-red-500 mt-1" /> */}
                <div>
                  <p className={`font-medium ${isDiscord ? 'text-gray-100' : 'text-zinc-900'}`}>Client says:</p>
                  <p className={isDiscord ? 'text-neutral-300' : 'text-zinc-800'}>"{scene.clientMessage}"</p>
                </div>
              </div>
            </div>

            {showResult && (
              <div className="mt-4 animate-fadeIn">
                <div className={`p-3 rounded-lg ${isDiscord ? 'bg-zinc-800 text-gray-200' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-zinc-800'}`}>
                  <p className="text-center font-semibold">
                    {scene.results[choices[choices.length - 1]?.choice]?.message}
                  </p>
                </div>
                <button
                  onClick={handleNextScene}
                  className={`w-full mt-3 px-6 py-3 ${theme.primary} text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200 shadow-lg flex items-center justify-center space-x-2`}
                >
                  <span>Next</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {!showResult && (
            <div className="space-y-3 mt-6">
              {scene.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleChoice(scene, option.id)}
                  className={`w-full p-4 text-left bg-white rounded-lg border-2 border-gray-200 hover:${theme.accent} hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200`}
                >
                  <span className="font-medium">{option.text}</span>
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-4">
            {/* <Shield className="w-4 h-4" /> */}
            <span>Disputes can be resolved fairly</span>
          </div>
        </div>
      );
    }

    if (scene.type === 'final') {
      const badChoices = choices.filter(c => !c.correct).length;
      const goodChoices = choices.filter(c => c.correct).length;

      return (
        <div className="text-center space-y-6">
          <h2 className={`text-2xl md:text-3xl font-medium bg-gradient-to-r ${selectedPlatform === 'discord' ? 'from-indigo-500 to-purple-600' : 'from-blue-500 to-blue-600'} bg-clip-text text-transparent`}>
            Game Complete!
          </h2>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={theme.icon} className='w-10 h-10' alt="" />
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
              Played on {theme.name}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border-2 border-red-200 dark:border-red-800">
              {/* <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" /> */}
              <h3 className="text-lg font-medium text-red-700 mb-2">Scam World</h3>
              <p className="text-2xl md: text-red-600">{badChoices}</p>
              <p className={`text-base font-medium mt-1 ${isDiscord ? 'text-gray-300' : 'text-zinc-800'}`}>Bad Choices</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-2 border-green-200 dark:border-green-800">
              {/* <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" /> */}
              <h3 className="text-lg font-medium text-green-700 mb-2">Chatllat Safety</h3>
              <p className="text-2xl md:text-3xl font-medium text-green-600">{goodChoices}</p>
              <p className={`text-base font-medium mt-1 ${isDiscord ? 'text-gray-300' : 'text-zinc-800'}`}>Smart Choices</p>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${selectedPlatform === 'discord' ? 'from-indigo-900/20 to-purple-900/40' : 'from-blue-500/20 to-indigo-600/40'} rounded-lg p-6`}>
            {/* <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-3" /> */}
            <p className={`text-lg font-semibold mb-2 ${isDiscord ? 'text-gray-300' : 'text-zinc-800'}`}>
              {goodChoices === 3 ? "🎉 Perfect Score! You're a Security Pro!" : 
               goodChoices === 2 ? "👍 Good job! You avoided most scams!" :
               goodChoices === 1 ? "⚠️ Be careful! You need more practice." :
               "😱 Oh no! You got scammed every time!"}
            </p>
            <p className={`${isDiscord ? 'text-gray-400' : 'text-zinc-800'}`}>
              You made {badChoices} bad {badChoices === 1 ? 'choice' : 'choices'}... but {goodChoices} right {goodChoices === 1 ? 'one' : 'ones'}.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={resetGame}
              className={`w-full px-6 py-3 ${theme.primary} text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200`}
            >
              Play Again
            </button>
            
            {/* <Lock className="w-4 h-4" /> */}
            {/* <Trophy className="w-4 h-4" /> */}
            {/* <div className="flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                <span>Start Secure Deal</span>
              </button>
              
              <button className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2">
                <span>Mint NFT Badge</span>
              </button>
            </div> */}
            
            {/* <Share2 className="w-4 h-4" /> */}
            {/* <button className="px-4 py-2 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
              <span>Share on X</span>
            </button> */}
          </div>
        </div>
      );
    }
  };

  const progressPercentage = currentScene > 1 ? ((currentScene - 2) / (scenes.length - 3)) * 100 : 0;

  if (!isOpen) return null;

  return (
    <>
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur z-50">
        <div className={`${selectedPlatform && currentScene > 1 ? (selectedPlatform === 'discord' ? 'bg-zinc-900' : 'bg-white') : 'bg-gradient-to-b from-dark-900 to-dark-950 rounded-3xl'} 
            rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
          <div className={`sticky top-0 ${selectedPlatform && currentScene > 1 ? theme.headerBg : 'bg-zinc-900'} border-b border-zinc-950 p-4 flex items-center justify-between`}>
            <div className="flex items-center space-x-3">
              {selectedPlatform && currentScene > 1 ? 
              <img src={theme.icon} className='w-10 h-10 object-cover' alt="" />
              : <div className="text-2xl">🎮</div>}
              <span className={`font-medium text-lg text-white ${selectedPlatform && currentScene > 1 ? '' : ''}`}>
                Scammer Simulator {selectedPlatform && currentScene > 1 ? `- ${theme.name}` : ''}
              </span>
            </div>
            <button
              onClick={onClose}
              className={`${selectedPlatform && currentScene > 1 ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'} text-2xl`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {currentScene > 1 && currentScene < scenes.length - 1 && (
            <div className="px-4 pt-4">
              <div className={`w-full rounded-full h-2 ${selectedPlatform === 'discord' ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                <div 
                  className={`${theme.primary} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex space-x-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-2 h-2 rounded-full ${
                        currentScene - 1 >= step 
                          ? (selectedPlatform === 'discord' ? 'bg-indigo-600' : 'bg-blue-500')
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="p-6">
            {renderScene()}
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Section Component with the game
// const HeroSection = () => {
//   const [isGameOpen, setIsGameOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
//       <div className="container mx-auto px-4 py-20">
//         <div className="text-center space-y-8 max-w-4xl mx-auto">
//           <div className="relative">
//             <div className="absolute inset-0 flex justify-center">
//               <div className="w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//               <div className="w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
//               <div className="w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
//             </div>
            
//             <h1 className="relative text-6xl md:text-7xl font-medium mb-6">
//               <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-white">
//                 Scammer Simulator
//               </span>
//             </h1>
//           </div>

//           <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
//             Test Your Crypto Freelance Survival Skills
//           </p>

//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Navigate through realistic scam scenarios and learn how to protect yourself in the wild world of crypto freelancing. 
//             Make the right choices or get rugged!
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//               <div className="text-4xl mb-4">🎮</div>
//               <h3 className="text-xl font-medium mb-2">Interactive Gameplay</h3>
//               <p className="text-gray-600 dark:text-gray-400">Choose your platform and make decisions that matter</p>
//             </div>
            
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//               <div className="text-4xl mb-4">🛡️</div>
//               <h3 className="text-xl font-medium mb-2">Learn Security</h3>
//               <p className="text-gray-600 dark:text-gray-400">Understand how escrow protects your deals</p>
//             </div>
            
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//               <div className="text-4xl mb-4">🏆</div>
//               <h3 className="text-xl font-medium mb-2">Earn Badges</h3>
//               <p className="text-gray-600 dark:text-gray-400">Complete scenarios and mint your survivor NFT</p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button
//               onClick={() => setIsGameOpen(true)}
//               className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
//             >
//               {/* <Zap className="w-5 h-5" /> */}
//               <span>Start Game</span>
//               {/* <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
//             </button>
            
//             <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium text-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
//               Learn More
//             </button>
//           </div>

//           <div className="flex justify-center space-x-8 mt-12 text-gray-600 dark:text-gray-400">
//             <div className="text-center">
//               <div className="text-3xl font-medium text-purple-600">1000+</div>
//               <div className="text-sm">Players Protected</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-medium text-pink-600">$50K+</div>
//               <div className="text-sm">Scams Avoided</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-medium text-blue-600">100%</div>
//               <div className="text-sm">Free to Play</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ScammerSimulator isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
//     </div>
//   );
// };

export default ScammerSimulator;