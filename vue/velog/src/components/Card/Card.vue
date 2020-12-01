<template>
    <div class="card">
        <div class="card-img">
            <img src="https://media.vlpt.us/images/hygoogi/post/79a55b35-c5dc-48c1-8a0b-483d6a68b929/interview.png">
        </div>
        <div class="card-content">

            <div class="card-title black">
                기술 면접 질문 모음
            </div>
            <p class="card-desc dark-grey">
1. 이 질문들에 소리내어 답해본다(녹음하면 더 좋다). 2. 대답하면서 느꼈던 모호함이 있다면 그것을 확실히 공부한다. 3. 만족할 때까지 1~2를 반복한다.            </p>
            <div class="card-bottom">
                <div class="card-meta card-desc-sm grey">
                    <span class="card-meta-date">
                        2020년 10월 24일
                    </span>
                    <span>
                        -
                    </span>
                    <span class="card-meta-comments">
                        3개의 댓글
                    </span>
                </div>

                <div class="card-author card-desc-sm grey">
                    <img src="https://media.vlpt.us/images/dongyi/profile/33e8f935-810f-4f60-830e-49486fdd43d1/97515226_2623524787885514_8801563814110691328_n.jpg?w=120">
                    <div class="card-author-name">
                        by hygoogi
                    </div>
                    <div class="card-author-like">
                        129
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"card"
}
</script>

<style scope>

    .card {
        position:relative;
        background: white;
        height:400px;
        display:flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
        border-radius: 4px;
        width: 20rem;
        margin: 1rem;
        overflow:hidden;
    }

    .card-img {
        flex:1;
        display:flex;
    }
    
    .card-content {
        flex:1.618;
    }

    .card-title {
        padding:1rem;
        padding-bottom:0;
    }

    .card-desc {
        padding:1rem;
        line-height:1.3rem;
    }

    .card-bottom {
        position:absolute;
        bottom:0;
        width:100%;
        /* background:red; */
    }

    .card-meta {
        width:100%;
        display:flex;
        padding:0.3rem;
        padding-top:0.5rem;
        padding:1rem;
        padding-bottom:0.5rem;
    }
    .card-meta span { 
        margin-right:10px;
    }

    .card-author {
        border-top : solid 0.1px rgba(167, 167, 167, 0.2);
        width:100%;
        display:flex;
        align-items: center;
        padding:0.8rem;
        padding-left:1rem;
    }

    .card-author img {
        width:1.4rem;
        overflow:hidden;
        border-radius: 50%;
        margin-right:5px;
    }
     
</style>