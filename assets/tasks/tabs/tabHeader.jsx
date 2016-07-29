function TabHeader(props) {
    const onClick = (event) => {
        const tab = event.currentTarget;

        props.onTabClick({
            selectedTab: tab.dataset.tab
        });
    };

    let activeClass = ((props.selectedTab == props.id) ? 'active item': 'item');

    return (
        <a className={activeClass} data-tab={props.id} onClick={onClick}>{props.title}</a>
        );
}

window.TabHeader = TabHeader;
