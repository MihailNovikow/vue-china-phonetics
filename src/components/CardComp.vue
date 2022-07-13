<template>
    <div class="card-container">
        <div class="card-container-top">
            <div class="card-num-left">1
                <div class="card-container-rg-small">
                    <div class="card-rg-small">
                        <div class="card-num-right">1
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-symbol-small">yī</div>
        <div class="card-symbol">一</div>
        <div class="card-text">единица</div>
    </div>
</template>

<script>
export default {
    name: 'CardComp',

    props: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card-container {
    display: flex;
    width: 88px;
    height: 109px;
    left: 1287px;
    top: 314px;
    background: #F9F9F9;
    border: 2px solid #AFB9FF;
    border-radius: 7px;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    background: #F9F9F9;
    color: #373C65;
}

.card-container-top {
    display: flex;
    justify-content: flex-start;
    background-color: transparent;
}

.card-container-rg-small {
    display: flex;
    margin-left: 53px;
    margin-top: -2px;
    background-color: transparent;
}

.card-rg-small {
    box-sizing: border-box;
    display: flex;
    width: 26px;
    height: 33px;
    left: 1349px;
    top: 314px;
    background: #fff;
    border: 2px solid #AFB9FF;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    margin-top: -3px;
    margin-left: -4px;
    background-color: #f9f9f9;
}

.card-num-left {
    margin-top: 3px;
    margin-left: 3px;
    display: flex;
    width: 8px;
    height: 16px;
    left: 1293px;
    top: 322px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #383D63;
    background: #F9F9F9;
    align-items: flex-start;
}

.card-symbol {
    margin-left: 32px;
    display: flex;
    width: 24px;
    height: 28px;
    left: 1319px;
    top: 355px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    background: #F9F9F9;
    color: #383D63;
}

.card-symbol-small {
    margin-left: 3px;
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    background: transparent;
    color: #383D63;
    justify-content: flex-start;
    align-items: center;
}

.title {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    background: #F9F9F9;

    color: #373C65;
}

.card-num-right {
    width: 8px;
    height: 16px;
    left: 1358px;
    top: 323px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    background: #F9F9F9;
    color: #383D63;
}

.card-symbol {
    margin-bottom: 18px;
    width: 24px;
    height: 28px;
    left: 1319px;
    top: 355px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    background: #F9F9F9;
    color: #383D63;
}

.card-text {
    padding-bottom: 5px;
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    background: transparent;
    color: #383D63;
    justify-content: center;
}
</style>