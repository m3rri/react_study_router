import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home,About,AboutPeople} from 'pages/index';
import Menu from 'components/Menu';
/* Menu 는 원래 '../components/Menu'로 임포트 해야하지만,
 * jsconfig.json 파일에 compilerOptions등의 속성으로 root path를 미리 정의하면
 * 일반 js 파일에서는 상대경로대신 절대경로를 작성하여 임포트 할 수 있게 됨
 * 블로그에서 안내해준 "NODE_PATH=src" (package.json의 scripts 부분)은 이제 지원X
 */

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Routes>
                {/* v5에서 v6로 넘어가면서 switch->Routes 로 Route를 감싸줘야 사용할 수 있도록 바뀜 */}
                    <Route
                        /* exact 옵션 삭제됨. 정확하게 일치해야 설정한 컴포넌트를 보여주는 설정. */
                        path="/"
                        /* component 속성 대신 element로 변경됨 */
                        element={<Home/>}
                    />
                    {/* <Route path="/about" element={<About/>}/>
                    <Route path="/about/:name" element={<About/>}/> */}
                    <Route path="/about" element={<About/>}>
                        <Route index element={<div>there's no parameters</div>} />
                        <Route path=":name" element={<AboutPeople />} />
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default App;