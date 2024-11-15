import Image from 'next/image';

// 컴포넌트 생성
// 함수 선언식 (기명 함수)
function Func1() {
    return <div>함수 선언식</div>;
}

// 함수 표현식 (익명 함수)
const Func2 = function () {
    return <div>함수 표현식</div>;
};

// 화살표 함수
const Func3 = () => {
    return <div>화살표 함수</div>;
};

export default function Home() {
    console.log(true ? '참' : '거짓');

    const bool = false;
    const obj = {
        name: '홍길동',
        age: 20,
    };
    const user = {
        weight: 70,
        height: 180,
    };

    const array = ['menu1', 'menu2', 'menu3'];

    const users = [
        { name: '겨울', age: 2 },
        { name: '가을', age: 3 },
        { name: '여름', age: 4 },
    ];

    const info = {
        name: '홍길동',
        phone: '010-0000-0000', // null은 값이 없음을 의미
    };

    const isLogged = true;

    return (
        <div>
            <div>
                {/* 삼항 연산자 */}
                {isLogged ? '로그인' : '로그아웃'}
            </div>
            {/* or 연산자는 처음 만나는 참값을 출력 */}
            {info.name}의 전화번호는 {info.phone || '폰번호 없음'}입니다.
            {/* 컴포넌트 호출 */}
            <Func1 />
            <Func2 />
            <Func3 />
            <ul>
                {users.map((item, index) => (
                    // const item = user[0];
                    // const item = user[1];
                    // const item = user[2];

                    <li key={index}>
                        {item.name}이는 {item.age}살 입니다.
                    </li>
                ))}
                <li>
                    {users[0].name}이는 {users[0].age}살 입니다.
                </li>
                <li>
                    {users[1].name}이는 {users[1].age}살 입니다.
                </li>
                <li>
                    {users[2].name}이는 {users[2].age}살 입니다.
                </li>
            </ul>
            <ul>
                <li>
                    {users[0].name}이는 {users[0].age}살 입니다.
                </li>
                <li>
                    {users[1].name}이는 {users[1].age}살 입니다.
                </li>
                <li>
                    {users[2].name}이는 {users[2].age}살 입니다.
                </li>
            </ul>
            <ul>
                {/* map() 메서드를 사용해서 반복 */}
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* 각각의 항목을 출력 */}
            {array[0]} {array[1]} {array[2]}
            <br />
            {/* 예시 텍스트 */}
            나의 남편은 {array[0]}명이고 자식은 {array[1]}명이다
            <br />
            <hr />
            {bool ? '참' : '거짓'}
            <br />
            {/* 객체 속성 접근 */}
            {obj.name}
            {obj.age}
            <br />
            홍길동은 {obj.age}살 입니다.
            <br />
            {/* 사용자의 신체 정보 출력 */}
            김겨울의 몸무게는 {user.weight}kg 이고 키는 {user.height}cm 입니다
        </div>
    );
}
