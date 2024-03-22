import { initializeApp } from 'firebase/app';
import { getDatabase, ref, query, orderByChild, onValue } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

// Firebaseアプリを初期化
initializeApp(firebaseConfig);
const database = getDatabase();

// チャットメッセージをHTMLに表示する関数
function displayChatMessage(message) {
    const messagesContainer = document.getElementById('user-messages');
    const messageElement = document.createElement('div');
    messageElement.innerText = `${message.text} (${message.time}) by ${message.name}`;
    messagesContainer.appendChild(messageElement);
}

// RTDBからチャットメッセージを時間順に読み込む関数
function loadChatMessages() {
    const messagesRef = ref(database, 'chats');
    const sortedMessagesQuery = query(messagesRef, orderByChild('time'));

    onValue(sortedMessagesQuery, (snapshot) => {
        const messagesContainer = document.getElementById('user-messages');
        if (!messagesContainer) {
            console.error('メッセージコンテナが見つかりません。');
            return;
        }
        messagesContainer.innerHTML = ''; // コンテナを空にする
        snapshot.forEach((childSnapshot) => {
            const message = childSnapshot.val();
            displayChatMessage(message);
        });
    });
}

// ページの読み込みが完了したらメッセージを読み込む
document.addEventListener('DOMContentLoaded', loadChatMessages);
