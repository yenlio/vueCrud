<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/item_page">Item Page</router-link>
            </li>
        </ul>
    </nav>
</template>
<style scoped lang = "scss">
    nav{
        ul{
            padding: 0;
            list-style: none;
            li{
                display: inline-block;
                padding: 20px;
            }
        }
    }
</style>