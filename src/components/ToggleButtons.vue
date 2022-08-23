<template>
		<div class="btn-toggle-cont">
			<button type="button" class="btn-toggle">
				<img src="@/assets/prev.svg" class="btn-img" /><p class="btn_toggle_text">Previous Section</p>
			</button>
			<button type="button" class="btn-toggle">
				<p class="btn_toggle_text">Next section</p><img src="@/assets/next.svg" class="btn-img" />
			</button>
		</div>
    </template>
    <script>
    export default {
  name: 'toggle-buttons'
}
    </script>
    <style>
    
.btn-toggle-cont {
	display: flex;
	flex-direction: row;
	background: #f9f9f9;
	margin-bottom: 133px;
}

.btn-toggle {
	gap: 5%;
	margin-left: 84px;
	width: 136.5px;
	height: 43.5px;
	left: 1014px;
	top: 2757px;
	border: 1px solid transparent;
	background: #afb9ff;
	border-radius: 27.375px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
}
.btn_toggle_text {
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
}
    </style>