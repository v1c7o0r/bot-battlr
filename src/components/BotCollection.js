import React from "react";
import { useGlobalBotContext } from "../context/botContext";

function BotCollection() {

  const { bots, handleAddToArmy } = useGlobalBotContext();

  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Collection of all bots/conditional rendering/short-circuit */}
        {bots &&
          bots.map((bot) => {
            const {
              armor,
              avatar_url,
              bot_class,
              catchphrase,
              damage,
              health,
              id,
              name,
            } = bot;

            return (
              <div key={id} className="bot">
                <div className="bot-img-container">
                  <img src={avatar_url} alt={name} />
                </div>

                <div className="bot-details">
                  <h2 className="bot-name">{name}</h2>
                  <p className="bot-catchphrase">{catchphrase}</p>
                  <p className="bot-class">
                    <span>Class: {bot_class}</span>
                    <button
                      onClick={() => {
                        handleAddToArmy(bot);
                      }}
                    >
                      Add to Army
                    </button>
                  </p>
                </div>

                <div className="lower-section">
                  <span>
                    <i className="fa-solid fa-heart-crack"></i>
                    {damage}
                  </span>
                  <span>
                    <i className="fa-solid fa-bolt-lightning"></i>
                    {health}
                  </span>
                  <span>
                    <i className="fa-solid fa-shield"></i>
                    {armor}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default BotCollection;
