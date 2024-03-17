// index.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('ログインに成功しました。');
        // ログインが成功したらindex.htmlにリダイレクト
        window.location.href = 'public/main.html';
    } catch (error) {
        console.error('ログインに失敗しました:', error.message);
        // ログイン失敗時のエラーハンドリング
    }
});
