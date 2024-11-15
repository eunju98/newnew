'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const OperatorPage = () => {
    let a = 1;
    let b = 2;

    const pathname = usePathname(); // 현재 경로
    // pathname = /optator

    const width = 6;
    // const login = true; // 로그인 부르기
    const login = ''; //로그아웃

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arrAll = [...arr1, ...arr2];

    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { d: 4, e: 5, f: 6 };
    const objAll = { ...obj1, ...obj2 };

    return (
        <>
            <div>
                {/* 전개 연산자 */}
                객체 참가자 : {objAll.a}, {objAll.b}
                참가자 수 : {arrAll}
                <ul>
                    {arrAll.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                {/* 삼항 연산자 */}
                {/* 조건 ? 참 : 거짓 */}
                {login ? <div>로그인</div> : <div>로그아웃</div>}
                {width === 5 ? '참' : '거짓'}
            </div>
            <div>
                {/* 논리 연산자 */}
                {/* && 둘 다 참일 경우 참을 반환 */}
                {true && '참'}
                {width && <div className={`w-${width}`}>버튼의 가로 사이즈</div>}

                {/* 둘 중 하나만 참이면 처음 만나는 참값을 반환 */}
                {false || '거짓'}

                {width || '가로 사이즈 없음'}
                {false || '폰 번호 없음'}
            </div>
            <div>
                {/* 비교 연산자 */}
                <Link
                    href="/operator"
                    className={pathname !== '/oprator' ? 'text-blue-500' : 'text-black'}
                >
                    oprator/비교 연산자
                </Link>
                <br />
                <Link
                    href="/operator"
                    className={pathname !== '/about' ? 'text-blue-500' : 'text-black'}
                >
                    about/비교 연산자
                </Link>
            </div>
            <div className="p-5">
                {a} + {b} = {a + b} <br />
                {a} % {b} = {a % b} <br />
            </div>
            <div>dd</div>
        </>
    );
};

export default OperatorPage;
