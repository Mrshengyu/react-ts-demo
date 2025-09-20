// 封装获取列表编导的逻辑
import { useState, useEffect } from'react'
import { getChannelsAPI } from '@/apis/article'
function useChannel() {
    // 1 获取频道列表所有逻辑
    // 2 把组件中要用到的数据return出去
    const [channelList, setChannelList] = useState([])

    useEffect(() => {
        //获取频道列表
        const getChannelList = async () => {
            // const res = await getChannelsAPI();
            const res = { data: [] };
            res.data.unshift({ id: 0, name: '推荐' }, { id: 1, name: '最新' }, { id: 2, name: '热榜' }, { id: 3, name: '原创' }, { id: 4, name: '视频' }, { id: 5, name: '问答' })
            setChannelList(res.data)
        }

        //调用函数
        getChannelList()
    }, [])
    return { channelList }

}

export { useChannel }