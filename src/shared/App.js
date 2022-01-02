import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home,About} from '../pages';
import Menu from '../components/Menu';

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
                    <Route path="/about" element={<About/>}/>
                    <Route path="/about/:name" element={<About/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;