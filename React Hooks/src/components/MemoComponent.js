import React from 'react'

function MemoComponent({name}) {
    console.log("coming inside Memo component");
    return (
        <div>
            Memo component - {name}
        </div>
    )
}

export default React.memo(MemoComponent)
