
const DecideDate = ({date}) => {
    let result = '';

        const diffMS = new Date().getTime() - new Date(date).getTime();
        const min = parseInt(diffMS / 1000 / 60 );
        const hours = parseInt(min / 60);
        const days = parseInt(hours / 24);

        if(min < 1){
            result = 'Yaklaşık bir dakika önce'
        }else{
            if(hours < 1){
                result = min + ' dakika önce'
            }else{
                if(days < 1){
                    result = hours + ' saat önce'
                }else{
                    result = days + ' gün önce'
                }
            }
        }
        return result;
}

export default DecideDate;