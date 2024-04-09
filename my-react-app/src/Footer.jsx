{/* <footer></footer>は、HTMLで文書のフッター
（下部領域）を定義するための要素です。
通常、ウェブページの末尾に配置され、ウェブページ全体の著作権情報、連絡先情報、サイトマップ、
または他の補足的な情報を含むことがあります。 */}

function Footer(){
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} kayumi website</p>
        </footer>
    );
}

export default Footer