import React, { useState, useEffect, useContext } from "react";
const BotContext = React.createContext();


export const BotProvider = ({ children }) => {

  const [bots, setBots] = useState([]);


  const [armyBots, setArmyBots] = useState([]);


  const fetchAllBots = () => {
    fetch("http://localhost:3000/bots")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBots(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  useEffect(() => {
    fetchAllBots();
  }, []);

  const handleAddToArmy = (addToArmy) => {
    if (!armyBots.includes(addToArmy)) {
      setArmyBots([...armyBots, addToArmy]);
      alert("Bot added to army");
    } else {
      alert("Bot already in army");
    }


  };


  const handleReleaseFromArmy = (releaseFromArmy) => {
    if (armyBots.includes(releaseFromArmy)) {
      const remainingBots = armyBots.filter((armyBot) => {
        return armyBot.id !== releaseFromArmy.id;
      });
      setArmyBots(remainingBots);
      alert("Bot released from army");
    } else {
      alert("Bot not in army");
    }
  };


  const handleDischargeFromDuty = (dischargeFromDuty) => {

    const remainingOnDuty = armyBots.filter((armyBot) => {
      return armyBot.id !== dischargeFromDuty.id;
    });
    setArmyBots(remainingOnDuty);

    const remainingInCollection = bots.filter((bot) => {
      return bot.id !== dischargeFromDuty.id;
    });
    setBots(remainingInCollection);

    alert("Bot discharged from duty");
  };


  return (
    <BotContext.Provider
      value={{
        bots,
        armyBots,
        handleAddToArmy,
        handleReleaseFromArmy,
        handleDischargeFromDuty,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};

export const useGlobalBotContext = () => {
  return useContext(BotContext);
};
