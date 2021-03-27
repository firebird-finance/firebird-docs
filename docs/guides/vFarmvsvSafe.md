---
id: vFarmvsvSafe
title: vFarm vs. vSafe
sidebar_label: vFarmvsvSafe
---

**OVERVIEW**  

In order to maximize your investment, it is important for you to understand the difference between Value DeFi's vFarms and a vSafes.  While they both yield generous rewards, they both hold unique and interesting features and we will cover each one of those in this guide; enjoy!  

![Separator](../img/seperator.png)

**vFarm Summary**  

A vFarm is a highly sophisticated liquidity mining pool that allows pool creators to set up vast amounts of parameters, including reward multipliers and rewards vesting, an option to reward their liquidity providers in a fair way while reducing selling pressure usually related to large quantities of tokens being suddenly released into circulation.  

![1](https://user-images.githubusercontent.com/78454114/112706767-78dc8300-8e74-11eb-9edd-5738691ae443.png)  
<center>vFarms with vested rewards</center>  

Projects who decide to lock their rewards have details shown on UI at Rewards locked tab. Clicking on block number 6675734 will take you to BSCscan block countdown page where you can see approximate time left till that block gets validated.  
![2](https://user-images.githubusercontent.com/78454114/112706804-ad503f00-8e74-11eb-8e8d-7ecd5aab163f.png)  

It is also block number where 70 % of rewards will start to get linearly released.  

Clicking on the second block will show when 70% of rewards stop being released.  
![3](https://user-images.githubusercontent.com/78454114/112706808-ba6d2e00-8e74-11eb-98cd-2b53b355d21b.png)  

In this specific case it means that you are receiving 30% of rewards instantly for the first 30 days, but you are also accruing your rewards for 90 days that those rewards are released. During those 90 days you do not have to remain in vFarm to receive those rewards, they will be linearly released and you are able to claim them partially every block or claim full amount after vesting period ends.  

So in a graphic way it would look like this:  
![4](https://user-images.githubusercontent.com/78454114/112706813-c5c05980-8e74-11eb-9db7-ab6a43e8d974.png)  


**vSafe Summary**  

vSafe is cutting edge yield aggregator that is able to use multiple strategies to maximise profits to its users while giving auto compound benefits as well. In simpler terms, a vSafe will search for the best farming targets, deposit your investment, trade farming rewards for deposited tokens and re-invest automatically.

What happens if a strategy has a farming target that has rewards vested?

In order for vSafe to work properly, users send their capital to vSafe smart contract so that it has the full liberty to use it, which makes reinvesting, changing strategy and hourly auto-compounding possible. Users are giving their vested reward rights to vSafe to freely distribute and are not tied to users address like in case of vFarm, but to vSafe address. As rewards get released vSafe will regularly call harvest function, sell rewards and distribute them to users who are in vSafe at that moment, whether or not they “earned” those rewards by being early vSafe depositors. This means that locked rewards are not earmarked to each depositor. All past locked rewards are distributed proportionally to current vSafe participants during the linear vesting period.  
![5](https://user-images.githubusercontent.com/78454114/112706830-e4beeb80-8e74-11eb-88de-aa3154b08e02.png)

vSafe calculates it APY/daily apy using data from its farming target, so even though it is correct as yearly calculation, daily apy is in fact 3/10ths of what it displays due to 30% of rewards being released instantly while 70% being released over a period of 90 days.  

To check if vSafe is utilizing vested strategy you can click on the Running strategy arrow icon at bottom of the screen that will lead you to vFarm it uses as target.  
![6](https://user-images.githubusercontent.com/78454114/112706844-ed172680-8e74-11eb-97a1-99a854851104.png)

There you will see reward vesting details.   

It is also important to know that due to the specific mechanism of vSafe, you will need to remain in vSafe for the entire rewards release duration to receive maximum benefits (in this case full 120 days).  

**GETTING STARTED**  
- BSC: https://bsc.valuedefi.io/#/vsafe
- Ethereum: https://valuedefi.io/value-vaults  
