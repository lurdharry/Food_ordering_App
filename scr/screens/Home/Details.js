import React, {Component} from 'react';
import {StyleSheet, StatusBar, View, Image, ScrollView} from 'react-native';
import {
  hp,
  wp,
  FavHeader,
  RegularText,
  SemiBoldText,
  BoldText,
  TypesCard,
} from '../../common';
import * as Colors from '../../common/colors';
import {RestImage} from '../../../assets/images';
import {Star} from '../../../assets/icons.svg/icon_svg';
import {PopularRow, Types} from './utils';

class Details extends Component {
  state = {
    isFav: false,
    title: 'Best Seller',
  };
  addAsFav = () => {
    this.setState({isFav: !this.state.isFav});
  };
  onSelect = title => {
    this.setState({title});
  };
  render() {
    const {isFav, title} = this.state;
    const {details} = this.props.route.params;

    return (
      <>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <FavHeader
          navigation={this.props.navigation}
          onFavPress={this.addAsFav}
          isFav={isFav}
        />
        <View style={styles.container}>
          <Image source={RestImage} style={styles.pic} resizeMode="stretch" />
          <DetailsCard details={details} />
          <PopularRow title="Menu" />
          <View style={{height: hp(60)}}>
            <ScrollView
              contentContainerStyle={styles.scroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Types.map((item, index) => (
                <TypesCard
                  key={index}
                  title={item.title}
                  onPress={() => this.onSelect(item.title)}
                  selected={title === item.title}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default Details;

const DetailsCard = ({details, onPress}) => {
  const {name, rating, category, count} = details;

  return (
    <View style={styles.detailsView}>
      <View>
        <BoldText title={name} style={styles.name} />
        <View style={styles.star_cat}>
          <Star height={14} width={14} style={styles.star} />
          <SemiBoldText title={`${rating.toString()} `} style={styles.rating} />
          <RegularText title={`(${count.toString()}) `} style={styles.count} />
          <RegularText title={`• ${category}`} style={styles.cat} />
        </View>
      </View>
      <SemiBoldText title="More info" style={styles.more} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    // marginVertical: hp(24),
    paddingHorizontal: wp(24),
    flexDirection: 'row',
  },
  count: {
    fontSize: hp(14),
  },
  cat: {
    fontSize: hp(14),
    color: Colors.LightPurple,
  },
  star: {
    marginBottom: hp(3),
  },
  rating: {
    marginLeft: wp(8),
    fontSize: hp(14),
  },
  star_cat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: hp(24),
  },
  more: {
    fontSize: hp(12),
    color: Colors.Purple,
  },
  detailsView: {
    flexDirection: 'row',
    paddingHorizontal: wp(24),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hp(40),
  },
  pic: {
    width: wp(343),
    height: hp(200),
    marginTop: hp(24),
    marginBottom: hp(16),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.White,
  },
});
