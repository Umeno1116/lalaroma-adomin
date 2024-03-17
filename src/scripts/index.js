import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm['email'].value;
            const password = loginForm['password'].value;

            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('ログインに成功しました。');
                window.location.href = './main.html';
            } catch (error) {
                console.error('ログインに失敗しました:', error.message);
            }
        });
    }
});
