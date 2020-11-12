import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import {
  RegularText,
  hp,
  wp,
  SemiBoldText,
  CategoryCard,
  FavHeader,
  navigate,
} from '../../common';
import * as Colors from '../../common/colors';
import {Location} from '../../../assets/icons.svg/icon_svg';
import {Categories, PopularRow, PopularRes, RestaurantCard} from './utils';

class Home extends Component {
  state = {
    title: 'All',
  };

  selectCategory = title => {
    this.setState({title});
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <View style={styles.container}>
          <Address_Location />
          <View style={{height: hp(140), marginBottom: hp(30)}}>
            <FlatList
              contentContainerStyle={styles.FlatListContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Categories}
              renderItem={({item}) => {
                const selected = item.title === this.state.title;
                return (
                  <CategoryCard
                    title={item.title}
                    selected={selected}
                    Icon={selected ? item.selectedIcon : item.icon}
                    onPress={() => this.selectCategory(item.title)}
                  />
                );
              }}
              keyExtractor={(user, index) => index.toString()}
            />
          </View>
          <PopularRow title="Popular Restaurents" />
          <FlatList
            data={PopularRes}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <RestaurantCard
                  item={item}
                  navigation={() => navigate(this, 'detail', {details: item})}
                />
              );
            }}
          />
        </View>
      </>
    );
  }
}

export default Home;

const Address_Location = () => (
  <View style={styles.Location}>
    <Location />
    <View style={styles.locaText}>
      <SemiBoldText title="Home" style={styles.Home} />
      <RegularText title="242 ST Marks Eve, Finland " style={styles.address} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  FlatListContainer: {
    alignSelf: 'flex-start',
    marginLeft: wp(24),
    marginTop: hp(40),

    paddingRight: wp(20),
  },
  address: {
    color: Colors.LightPurple,
  },
  Home: {
    fontSize: hp(18),
  },
  locaText: {
    marginLeft: wp(22),
    paddingTop: hp(10),
  },
  Location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(24),
    alignSelf: 'flex-start',
    marginTop: hp(15),
    // height: hp(50),
  },

  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.White,
  },
});
