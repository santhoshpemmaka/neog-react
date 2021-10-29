import React,{useState} from 'react';
import './EmojiPedia.css';

const EmojiPedia = () => {
    const [useMessage, setuseMessage] = useState("");

    const emojiCollections = {
        '😃' : 'Smileys & People',
        '🐻':   'Animals & Nature',
        '🍔' : 'Food & Drink',
        '⚽' :  'Activity',
        '🌇' : 'Travel & Places',
        '💡'  :  'Bulb',
        '🔣' :  'Symbols',
        '🎌' : 'Flags',
        '🔥'  : 'Fire',
        '😊'  : 'Smiling Face with Smiling Eyes',
        '✔️'  :  'Check Mark',
        '👻' :  'Ghost',
        '😂' : 'Face with Tears of Joy',
        '👍' : 'Thumbs Up'
    }
    const emojisknow = Object.keys(emojiCollections);
    const messageHandler = (e) =>{
        var emojiMessage = emojiCollections[e.target.value];
        if(emojiMessage === undefined){
            emojiMessage = "We don't have this in our database";
        }
        setuseMessage(emojiMessage);
    }

    const emojiClikhandler = (emoji) => {
        setuseMessage(emojiCollections[emoji]);
    }

    return(
        <div className="Emoji">
            <input onChange={(e) => messageHandler(e)} className="input" type="text" />
            <h3 className="message">{useMessage}</h3>
            <h3 style={{margin:'2rem', color:"#93C5FD"}}> Emojis in your database</h3>
            { emojisknow.map((emoji) => {
                return(
                    <span key={emoji} style={{fontSize: '2rem', padding:'0.5rem', cursor:'pointer'}} onClick={() => emojiClikhandler(emoji)}
                        >{emoji}
                    </span>
                )
            })}
        </div>
    )
}

export default EmojiPedia;