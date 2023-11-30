let password = 'qaz';
if (password.lenght >= 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надежный');
} else console.log('Пароль недостаточно надёжный');