<template>
    <div class="jitem">
        <img :src="jx.pic" alt="">
        <p class="title">{{ jx.title }}</p>
        <p class="neir">{{ jx.descript }}</p>
    </div>
</template>

<script>
export default {
    props:["jx"],
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
.jitem{
    margin-left: 0.12rem;
    width: 4.42rem;
    height: 3.78rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img{
        width: 4.42rem;
        height: 2.84rem;
        border-radius: 0.06rem;
    }
    .title{
        font-size:0.18rem;
        width: 4.3rem;
    }
    .neir{
        font-size: 0.14rem;
        color: #C0C0C0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 3.24rem;
    }
}
</style>
