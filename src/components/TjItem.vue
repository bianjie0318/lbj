<template>
    <div class="tjlist">
        <img :src="tj.pic" alt="">
        <p class="title">{{ tj.name }}</p>
        <p class="neir">{{ tj.characteristic }}</p>
        <p class="jiag">￥{{ tj.minPrice }}</p>
    </div>
</template>

<script>
export default {
    props:["tj"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">
.tjlist{
    //  width: 2.5rem;
    display: flex;
    flex-direction: column;
    
    img{
        width:2.33rem;
        height: 3rem;
    }
    .title{
        font-size:0.2rem;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .neir{
        font-size:0.14rem;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #C7C7C7;
        padding: 0.1rem 0;
    }
    .jiag{
        font-size:0.16rem;
        color: #D00000;
    }
}
</style>
